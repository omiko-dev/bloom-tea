import { Injectable } from '@angular/core';
import TeaData from '../Json/Tea.json'
import ExtrasData from '../Json/Extras.json';
import BlogData from '../Json/Blog.json';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  public cartInfo: any = [];

  GetTeaApi() {
    return TeaData;
  }

  getCartInfo(el: any) {
    this.cartInfo.push(el);
    console.log(this.cartInfo);

  }

  getCart() {
    return this.cartInfo;
  }


  GetExtrasApi() {
    return ExtrasData;
  }

  GetBlogApi(){
    return BlogData;
  }



}
