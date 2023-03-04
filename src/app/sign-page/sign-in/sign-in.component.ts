import { Component } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email!: string;
  password!: string;

  // constructor(private auth: AngularFireAuth) {}

  // onSubmit() {
  //   this.auth
  //     .signInWithEmailAndPassword(this.email, this.password)
  //     .then((userCredential: { user: { email: any; }; }) => {
  //       // User logged in successfully
  //       console.log('Logged in as', userCredential.user.email);
  //     })
  //     .catch((error: any) => {
  //       // Handle login error
  //       console.error(error);
  //     });
  // }
}
