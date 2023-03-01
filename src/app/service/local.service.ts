import { Injectable } from '@angular/core';
import data from '../Json/Tea.json'
import dataTwo from '../Json/Extras.json';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  public cartInfo: any = [];

  GetTeaApi() {
    return data
  }

  getCartInfo(el: any) {
    this.cartInfo.push(el);
    console.log(this.cartInfo);

  }

  getCart() {
    return this.cartInfo;
  }


  GetExtrasApi() {
    return dataTwo
  }



}
