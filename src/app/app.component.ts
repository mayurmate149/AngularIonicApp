import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { TranslateService } from '@ngx-translate/core';
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  public rootPage: any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService) {
    platform.ready().then(() => {
      // To be used for tour page

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
