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

  public collStyle: boolean = true;

  public Price: number = 2;

  price() {
    this.collStyle = !this.collStyle;
  }
}
