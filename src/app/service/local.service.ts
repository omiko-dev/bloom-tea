import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

import TeaData from '../Json/Tea.json';
import ExtrasData from '../Json/Extras.json';
import BlogData from '../Json/Blog.json';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalService {


  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/Home'])
    }, err => {
      alert('email or password are incorect');
      this.router.navigate(['/Registre']);
    })
  }

  //register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      this.router.navigate(['/Home']);
    }, err => {
      alert("email or password are incorect");
      this.router.navigate(['/Registre']);
    })
  }

  //sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/Home'])
    }, err => {
      alert(err.message)
    })
  }


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
