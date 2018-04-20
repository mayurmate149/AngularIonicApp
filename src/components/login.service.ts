import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BaseService } from '../utility/base.service';
@Injectable()
export class LoginService {
  constructor(public http: BaseService) {
  }
  get(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map((res: Response) => {
        return res;
      }).catch((error: Response) => Observable.throw(error));
  }

  post(body): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts/', body)
      .map((res: Response) => {
        return res;
      }).catch((error: Response) => Observable.throw(error));
  }
}
