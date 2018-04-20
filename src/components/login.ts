import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { ShowToast } from '../utility/showToast';

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
<br>
<br>
<button (click)="getRequest()">GET</button>
<button (click)="postRequest()">POST</button>
<p>{{user}}</p>
`,
})
export class LoginComponent {
  form: FormGroup;
  user: any;
  public body = {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  constructor(private fb: FormBuilder, public loginService: LoginService, private showToast: ShowToast) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  getRequest() {
    this.loginService.get().subscribe((data) => {
      this.user = data.json.title;
      this.showToast.presentToast(data.message);
    },
    // tslint:disable-next-line:align
    (error) => {
      this.showToast.presentToast(error.message);
    });
  }

  postRequest() {
    this.loginService.post(this.body).subscribe((data) => {
      this.user = data.json.title;
      this.showToast.presentToast(data.message);
    },
    // tslint:disable-next-line:align
    (error) => {
      this.showToast.presentToast(error.message);
    });
  }

  login() {
    console.log(`Login ${this.form.value.username}`);
  }
}
