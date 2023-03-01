import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.css'],
})
export class FirstNavComponent implements OnInit {
  public cartArr: any = [];

  constructor(private cartInfo: LocalService) {}

  ngOnInit() {
    this.cartArr = this.cartInfo.getCart();
  }

  public divStyle: string = '';

  public num: number = 0;


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

}
