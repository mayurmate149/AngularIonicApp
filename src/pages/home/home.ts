import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public toastCtrl: ToastController) {
    this.loginSuccess();
  }

  loginSuccess() {
    const toast = this.toastCtrl.create({
      message: 'Login Successfull',
      duration: 3000,
    });
    toast.present();
  }
}
