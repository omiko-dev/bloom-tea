import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.css'],
})
export class FirstNavComponent implements OnInit {
  public cartArr: any = [];
  public cartLenght!: number;

  constructor(private cartInfo: LocalService) {this.test();
  }

  ngOnInit() {
    this.cartArr = this.cartInfo.getCart();


    console.log('o');

  }

  public divStyle: string = '';

  public num: number = 0;

  list() {
    this.num += 1;
  }

  cart!: boolean;

  close() {
    this.cart = true;
  }
  open() {
    this.cart = false;
  }

  remove(el: any, i: number) {
    this.cartArr.splice(i, 1);
  }

  test() {
    this.cartLenght = this.cartArr.length;
  }


}
