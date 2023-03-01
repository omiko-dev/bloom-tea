import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-extras-cards',
  templateUrl: './extras-cards.component.html',
  styleUrls: ['./extras-cards.component.css'],
})
export class ExtrasCardsComponent implements OnInit {
  public data: any = [];

  constructor(private extraData: LocalService) {}

  ngOnInit(): void {
    this.data = this.extraData.GetExtrasApi();
  }

  public collStyle2!: boolean;
  public num: number = -1;

  public Price: number = 2;
  public plus1: string = '-';

  price() {
    this.num += 1;

    if (this.num % 2 === 0) {
      this.collStyle2 = true;
      this.plus1 = '+';
    } else {
      this.collStyle2 = false;
      this.plus1 = '-';
    }
  }
}
