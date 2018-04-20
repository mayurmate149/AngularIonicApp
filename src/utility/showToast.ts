import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ShowToast {
  constructor(private toastCtrl: ToastController) {
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
