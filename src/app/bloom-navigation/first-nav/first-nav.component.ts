import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.css'],
})
export class FirstNavComponent implements OnInit {
  public cartArr: any = [];

  public fullPrice: number = 0

  TeaSearch: any;

  constructor(private cartInfo: LocalService) {}

  ngOnInit() {
    this.cartArr = this.cartInfo.getCart();
    this.loop(this.cartArr);

    this.TeaSearch = this.cartInfo.GetFullData(); //! full data

  }

  public divStyle: string = '';

  public num: number = 0;


  cart!: boolean;

  close() {
    this.cart = true;
    this.loop(this.cartArr);
  }
  open() {
    this.cart = false;
    this.loop(this.cartArr);


  }

  remove(el: any, i: number) {
    this.cartArr.splice(i, 1);
    this.loop(this.cartArr);
  }

  loop(arr: any) {
    this.fullPrice = 0;
    for (let i = 0; i < arr.length; i++){
      this.fullPrice += Number(arr[i].price);
    }

    if (arr.length < 1) {
      this.fullPrice = 0;
    }

  }


  search(el:string, text:string):any {

    const newText = text.split('');
    const newEl = el.split('')
    let num = 0;

    for (let i = 0; i < newText.length; i++){
      if (newEl.includes(newText[i])) {
        num++;
      }
    }

    if (num > 1) {
      return true
    }

  }

}









