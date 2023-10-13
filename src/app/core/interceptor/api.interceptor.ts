import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url.split('_');
    let domain = '';
    switch (url[0].toString()) {
      case 'baseApi':
        domain = environment.baseApi;
        break;
      default:
        domain = environment.baseApi;
        break;
    }
    if (url[1]) {
      const updatedURL = domain + url[1];
      const updatedRequest = request.clone({ url: updatedURL });
      return next.handle(updatedRequest);
    } else {
      return next.handle(request);
    }
  }
}
