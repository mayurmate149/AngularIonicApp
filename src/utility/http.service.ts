import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  public jsonData = {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  public statusCode: any;
  constructor(public http: Http) { }

  public get(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
            .map((res: Response) => {this.statusCode = res.status; return res.json(); });
  }

  public post(): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts/', this.jsonData)
          .map((res: Response) => {this.statusCode = res.status; return res.json(); });
  }

}
