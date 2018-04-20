import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { HttpService } from '../utility/http.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from '../components/login';
import { LoginService } from '../components/login.service';
import { BaseService } from '../utility/base.service';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
  ],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    LoginService,
    BaseService,
  ],
})
export class AppModule {}
