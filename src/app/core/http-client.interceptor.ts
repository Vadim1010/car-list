import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car, Author } from '../shared';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor() {
  }

  public intercept(req: HttpRequest<Car[] | Author>, next: HttpHandler): Observable<HttpEvent<Car[] | Author>> {
    const URL = req.url;

    //  Clone the request to add the new header.
    const authReq = req.clone(
      {
        url: `http://localhost:3000/${URL}`
      }
    );

    // send the newly created request
    return next.handle(authReq)
      .do((event: HttpResponse<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('---> status:', event.status);
          // console.log('---> filter:', req.params.get('filter'));
        }
      })
      .finally(() => {
        // console.log('finally request');
      })
      .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('Error Occurred');
        // return the error to the method that called it
        return Observable.throw(error);
      });
  }
}
