import { AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';



@Component({
  selector: 'app-tea-filter-card',
  templateUrl: './tea-filter-card.component.html',
  styleUrls: ['./tea-filter-card.component.css'],
})
export class TeaFilterCardComponent implements OnInit, AfterContentInit {
  public type: any;

  constructor(private TeaApi: LocalService) {
    console.log(this.filter());
  }

  public image: any;

  public size!: any;

  hoverOn() {
    console.log('wow');
  }

  hoverOff() {
    console.log('nooooo');
  }

  public tea: any;

  ngOnInit(): void {
    this.tea = this.TeaApi.GetTeaApi();
  }

  // public content!: [];
  @ViewChildren('coll')
  coll!: QueryList<any>

  ngAfterContentInit(){


    console.log(this.coll);
    console.log(0.8);


  }

  public collStyle!: boolean;
  public collStyle2!: boolean;
  public collStyle3!: boolean;
  public num: number = -1;
  filter() {
    // console.log(this.child);
  }

  Collection() {
    this.num += 1;

    if (this.num % 2 === 0) {
      this.collStyle = true;
    } else {
      this.collStyle = false;
    }
  }

  public len: number = 5;
  price() {
    this.num += 1;

    if (this.num % 2 === 0) {
      this.collStyle2 = true;
    } else {
      this.collStyle2 = false;
    }
  }

  Size() {
    this.num += 1;

    if (this.num % 2 === 0) {
      this.collStyle3 = true;
    } else {
      this.collStyle3 = false;
    }
  }
}
