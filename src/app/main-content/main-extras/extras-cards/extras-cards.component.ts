import { Component } from '@angular/core';

@Component({
  selector: 'app-extras-cards',
  templateUrl: './extras-cards.component.html',
  styleUrls: ['./extras-cards.component.css']
})
export class ExtrasCardsComponent {

  public collStyle2!: boolean;
  public num: number = -1


  public Price: number = 2;
  public plus1: string = '-'

  price() {
    this.num += 1;

    if(this.num % 2 === 0){
      this.collStyle2 = true;
      this.plus1 = '+'
    }
    else{
      this.collStyle2 = false
      this.plus1 = '-'
    }

  }


}
