import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';

@Injectable()
export class BaseService {
  constructor(public http: HttpService) {
  }
  get(url): Observable<any> {
    return this.http.get(url).map((res: Response) => {
      if (res.status === 200) {
        return { message: 'The resource has been fetched and is transmitted in the message body.', json: res.json };
      }
    }).catch((error: Response) => {
      if (error.status === 404) {
        return Observable.throw({ message: 'Not Found', json: error.json() });
      }
    });
  }

  post(url, body): Observable<any> {
    return this.http.post(url, body).map((res: Response) => {
      if (res.status === 201) {
        return { message: 'The request has succeeded and a new resource has been created as a result of it.', json: res.json };
      }
    }).catch((error: Response) => {
      if (error.status === 404) {
        return Observable.throw({ message: 'Not Found', json: error.json() });
      }
    });
  }
}


  /* post(url, postBody: any, options?: RequestOptions) {
    this.helperService.startLoader();
    if (options) {
      return this.http.post(url, postBody, options)
        .map((res: Response) => {
          return this.handleResponse(res);
        })
        .catch((error: Response) => Observable.throw(error))
        .finally(() => {
          this.helperService.stopLoader();
        });
    } else {
      return this.http.post(url, postBody)
        .map((res: Response) => {
          return this.handleResponse(res);
        })
        .catch((error: Response) => Observable.throw(error))
        .finally(() => {
          this.helperService.stopLoader();
        });
    }
  } */


