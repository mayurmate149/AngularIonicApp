import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(public http: Http) { }

  public get(url): Observable<any> {
    return this.http.get(url)
      .map((res: Response) => {
        return { status: res.status, json: res.json() };
      }).catch((err: Response) => Observable.throw(err));
  }

  public post(url, body): Observable<any> {
    return this.http.post(url, body)
      .map((res: Response) => {
        if (res) {
          return { status: res.status, json: res.json() };
        }
      }).catch((err: Response) => Observable.throw(err));
  }
}
