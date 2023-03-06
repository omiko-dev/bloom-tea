import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, DoCheck {
  public arr: any;

  constructor(
    private cartInfo: LocalService,
    private apiData: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 520);
  }

  ngDoCheck(): void {
    this.arr = this.apiData.snapshot.queryParams;
  }


  public productNum: number = 1;

  cartAdder() {
      this.cartInfo.getCartInfo(this.arr);
  }
}
