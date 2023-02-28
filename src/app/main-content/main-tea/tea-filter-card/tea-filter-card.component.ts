import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';



@Component({
  selector: 'app-tea-filter-card',
  templateUrl: './tea-filter-card.component.html',
  styleUrls: ['./tea-filter-card.component.css'],
})
export class TeaFilterCardComponent implements OnInit {
  public type: any;

  constructor(private TeaApi: LocalService) {  }

  public image: any;

  public size!: any;


  public tea: any;

  ngOnInit(): void {
    this.tea = this.TeaApi.GetTeaApi();
  }

  public collStyle!: boolean;
  public collStyle2!: boolean;
  public collStyle3!: boolean;
  public num: number = -1;

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

  public typeArr: any = ['Classic', 'Herbal Tea', 'Special Edition'];
  typeFillter(event: Event) {
    const nativeElement = event.target as HTMLInputElement;
    if (nativeElement.checked && nativeElement.value === '') {
      this.typeArr = ['Classic', 'Herbal Tea', 'Special Edition'];
      console.log(this.typeArr);
    } else {
      this.typeArr = [nativeElement.value];
      console.log(this.typeArr);
    }
  }

  typeFillterIn(i: number) {
    return this.typeArr.includes(this.tea[i].type);
  }



  public teater: any = ['125', '200', '300'];

  sizeFillter(event: Event) {
    const nativeElement = event.target as HTMLInputElement;
    if (nativeElement.checked) {
      this.teater.push(nativeElement.value);
      console.log(this.teater);

      console.log(this.teater.includes(this.tea[2].size));
    } else {
      this.teater.splice(this.teater.indexOf(nativeElement.value), 1);
      console.log(this.teater.includes(this.tea[2].size));
    }
  }

  sizeFillterIn(i: number) {
    return this.teater.includes(this.tea[i].size);
  }


  noMore(){
    if(true){
      console.log('yes');
    }
      console.log('noooooo');
  }

}
