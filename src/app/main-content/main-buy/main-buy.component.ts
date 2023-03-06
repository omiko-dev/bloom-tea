import { Component, DoCheck, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-main-buy',
  templateUrl: './main-buy.component.html',
  styleUrls: ['./main-buy.component.css'],
})
export class MainBuyComponent implements OnInit, DoCheck {
  public buyItemsArr: any = [];
  public price: number = 0;
  public testArr: number[] = [];

  plus(i: number) {
    this.testArr[i]++;
  }

  minus(i: number) {
    if (this.testArr[i] > 1) {
      this.testArr[i]--;
    }
  }

  constructor(private buyItems: LocalService) {
  }

  ngOnInit(): void {
    window.scroll(0, 246);
    this.buyItemsArr = this.buyItems.cartInfo;
    this.price = this.fullPrice();
    this.testMetd();
  }

  ngDoCheck(): void {
    this.price = this.fullPrice();

  }

  remove(i: number) {
    this.buyItems.cartInfo.splice(i, 1);
  }

  fullPrice() {
    let price: any = 0;

    for (let i = 0; i < this.buyItemsArr.length; i++) {
      price += this.buyItemsArr[i].price * this.testArr[i];
    }
    return price;
  }


  testMetd() {
    for (let i = 0; i < this.buyItemsArr.length; i++) {
      this.testArr.push(1);
    }
  }
}
