import { Component } from '@angular/core';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.css']
})
export class SecondNavComponent {



  public listCss: boolean = false;

  animation(){
    this.listCss = !this.listCss;
  }


}
