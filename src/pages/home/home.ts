import { Component } from '@angular/core';
import { HttpService } from '../../utility/http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  status: any;
  title = 'Angular Ionic App';
  user: any;
  constructor(public httpService: HttpService) {
    this.httpService.get().subscribe((data) => {
      this.user = data.title;
      console.log(this.user);
      this.status = this.httpService.statusCode;
    });

    this.httpService.post().subscribe((data) => {
      this.user = data.title;
      console.log(this.user);
      this.status = this.httpService.statusCode;
    });

  }
}
