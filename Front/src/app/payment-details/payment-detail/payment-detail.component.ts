import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from '../../shared/payment-detail.service';
import {NgForm} from '@angular/forms';
import {Toast, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null){
      form.resetForm()
    }
    else{
      this.service.formData = {
        PMId: 0,
        ExpirationDate: "",
        CW: "",
        CardOwnerName: "",
        CardNumber: ""
      }
    }

  }

  onSubmit(form: NgForm){
    if(form.value.PMId == 0){
      this.insertValue(form);
    }
    else{
      this.updateValue(form);
    }


  }

  insertValue(form: NgForm){
    this.service.postPaymentDetail(form.value).subscribe(()=>{
      this.toastr.success("Added successfully");
      form.resetForm();
      this.service.getPaymentDetail();
    });
  }

  updateValue(form: NgForm){
    this.service.putPaymentDetail(form.value).subscribe(()=>
    {
      this.toastr.warning("Update success");
      form.resetForm();
      this.service.getPaymentDetail();
    })
  }

}
