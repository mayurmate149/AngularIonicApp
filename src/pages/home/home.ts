import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import * as Constants from '../../utility/general-constant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public teamPilotLogo: any = Constants.TEAMPILOT_LOGO;
  constructor(public toastCtrl: ToastController) {
    this.loginSuccess();
  }

  loginSuccess() {
    // Will be changing this code when using Http service
    const toast = this.toastCtrl.create({
      message: 'Login Successfull',
      duration: 3000,
    });
    toast.present();
  }
}
