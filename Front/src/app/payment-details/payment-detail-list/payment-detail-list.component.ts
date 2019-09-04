import {Component, OnInit} from '@angular/core';
import {PaymentDetailService} from '../../shared/payment-detail.service';
import {ToastrService} from 'ngx-toastr';
import {PaymentDetail} from '../../shared/payment-detail.Model';

@Component({
    selector: 'app-payment-detail-list',
    templateUrl: './payment-detail-list.component.html',
    styles: []
})
export class PaymentDetailListComponent implements OnInit {

    constructor(private service: PaymentDetailService,
                private toastr: ToastrService) {
    }

    ngOnInit() {
        this.service.getPaymentDetail();
    }

    onDelete(id: number) {
        if (confirm('Are you sure to delete this item?')) {
            this.service.deletePaymentDetail(id).subscribe(() => {
                    this.toastr.error('Deleted successfully');
                    this.service.getPaymentDetail();
            }
            );


        }

    }

    populateForm(element: PaymentDetail) {
        this.service.formData = Object.assign({}, element);
    }

}
