import { Injectable } from '@angular/core';
import {PaymentDetail} from './payment-detail.Model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
formData: PaymentDetail;
list: PaymentDetail[];

 readonly rootURL = 'http://localhost:1396/api';

  constructor(private http: HttpClient) { }

  postPaymentDetail(form: PaymentDetail){

    return this.http.post(this.rootURL + '/PaymentDetail', form);
  }

  getPaymentDetail(){
    return this.http.get(  this.rootURL+ '/PaymentDetail').toPromise().then(res=> this.list = res as PaymentDetail[]);
  }

  deletePaymentDetail(id: number){
      return this.http.delete(this.rootURL + '/PaymentDetail/' + id );
  }

  putPaymentDetail(form: PaymentDetail){
      return this.http.put(this.rootURL + '/PaymentDetail/' + form.PMId, form)
  }
}
