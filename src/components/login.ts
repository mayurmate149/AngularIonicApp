import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-login',
  template: `
<form (ngSubmit)="login()"
      [formGroup]="form">
  <label>Username</label>
  <input type="text"
         formControlName="username">
  <label>Password</label>
  <input type="password"
         formControlName="password">
  <button type="submit">Login</button>
</form>
<button (click)="getRequest()">GET</button>
<button (click)="postRequest()">POST</button>
<p>{{user}}</p>
<p>{{status}}</p>
`,
})
export class LoginComponent {
  form: FormGroup;
  status: any;
  user: any;
  message: any;
  public body = {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  constructor(private fb: FormBuilder, public loginService: LoginService, private toastCtrl: ToastController) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  getRequest() {
    this.loginService.get().subscribe((data) => {
      this.message = data.message;
      this.user = data.json.title;
      this.presentToast();
    },
    // tslint:disable-next-line:align
    (error) => {
      console.log(error);
      this.message = error.message;
      this.presentToast();
    });
  }


  postRequest() {
    this.loginService.post(this.body).subscribe((data) => {
      console.log(data);
      this.user = data.json.title;
      this.message = data.message;
      this.presentToast();
    },
    // tslint:disable-next-line:align
    (error) => {
      console.log(error);
      this.message = error.message;
      this.presentToast();
    });
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: this.message,
      duration: 3000,
      position: 'top',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  login() {
    console.log(`Login ${this.form.value.username}`);
  }
}
