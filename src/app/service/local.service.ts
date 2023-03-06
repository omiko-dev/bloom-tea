import { Injectable } from '@angular/core';
import TeaData from '../Json/Tea.json';
import ExtrasData from '../Json/Extras.json';
import BlogData from '../Json/Blog.json';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  public cartInfo: any = [];

  GetTeaApi() {
    return TeaData;
  }

  getCartInfo(el: any) {

    let num = 0;

    if (this.cartInfo.length < 1) {
      this.cartInfo.push(el);
    }
    else{
      for (let i = 0; i < this.cartInfo.length; i++){
        if (this.cartInfo[i].image == el.image) {
          num++;
        }
      }

      if (num < 1) {
        this.cartInfo.push(el);
      }
    }

  }

  getCart() {
    return this.cartInfo;
  }

  GetExtrasApi() {
    return ExtrasData;
  }

  GetBlogApi() {
    return BlogData;
  }

  GetFullData() {
    const data: any = [];

    for (let i = 0; i < TeaData.length; i++) {
      data.push(TeaData[i]);
    }

    for (let j = 0; j < ExtrasData.length; j++){
      data.push(ExtrasData[j]);
    }

    return data;
  }
}
