import { Component, Input, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-product-swiper',
  templateUrl: './product-swiper.component.html',
  styleUrls: ['./product-swiper.component.css']
})

export class ProductSwiperComponent implements OnInit {
  public Teadata: any;
  responsiveOptions;

  arr: any =[];


    constructor(private data:LocalService) {

      this.Teadata = this.data.GetTeaApi()

      this.responsiveOptions = [{


          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 3
      }];
    }

  ngOnInit(): void {

    console.log(this.data);

  




  }



}



