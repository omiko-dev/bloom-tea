import { Component } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private auth:LocalService){}

  register() {
    if (this.email == '') {
      alert('please enter email');
      return;
    }

    if (this.password == '') {
      alert('please enter password');
      return;
    }

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
