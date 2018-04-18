import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  public err: any;
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.loginForm = formBuilder.group({
      // tslint:disable-next-line:max-line-length
      username: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])],
      // tslint:disable-next-line:max-line-length
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(6), Validators.required])],
    });
  }

  submitForm(value: any): void {
    if (this.loginForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      this.navCtrl.push(HomePage);
    } else {
      this.checkError();
    }
  }

  checkError() {
    if (this.loginForm.controls.password.hasError('required')) {
      this.err = 'The password field cannot be empty';
    }
    if (this.loginForm.controls.password.hasError('minlength')) {
      this.err = 'Minimum length of password field is 6 charaters';
    }
    if (this.loginForm.controls.password.hasError('maxlength')) {
      this.err = 'Maximum length of password field is 20 charaters';
    }
    if (this.loginForm.controls.username.hasError('required')) {
      this.err = 'The username field cannot be empty';
    }
    if (this.loginForm.controls.username.hasError('minlength')) {
      this.err = 'Minimum length of username field is 6 charaters';
    }
    if (this.loginForm.controls.username.hasError('maxlength')) {
      this.err = 'Maximum length of username field is 20 charaters';
    }
    if (this.err !== null) {
      const toast = this.toastCtrl.create({
        message: this.err,
        duration: 3000,
      });
      toast.present();
    }
  }
}


