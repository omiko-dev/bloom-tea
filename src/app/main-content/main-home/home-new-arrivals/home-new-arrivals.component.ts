import { Component } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-home-new-arrivals',
  templateUrl: './home-new-arrivals.component.html',
  styleUrls: ['./home-new-arrivals.component.css']
})
export class HomeNewArrivalsComponent {

  public arr: any;

  constructor(private TeaEl: LocalService) {
    this.arr = this.TeaEl.GetTeaApi();
    console.log(this.arr);

  }


}
