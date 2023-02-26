import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{



  public arr: any;

  constructor( private cartInfo:LocalService, private apiData:ActivatedRoute){}

  ngOnInit(){
    this.arr = this.apiData.snapshot.queryParams;

    console.log(this.arr);

  }


  public productNum: number = 1;

  private cartBoolean!: boolean;
  cartAdder() {

  if (!this.cartBoolean) {
    this.cartInfo.getCartInfo(this.arr);
    console.log(this.arr);

    this.cartBoolean = !this.cartBoolean;
  }


  }



}
