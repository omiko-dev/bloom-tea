import { Component } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email : string = '';
  password: string = '';


  constructor(private auth: LocalService){}



  login() {

    if (this.email == '') {
      alert('please enter email');
      return
    }

    if (this.password == ''){
      alert('please enter password');
      return
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';

  }

}
