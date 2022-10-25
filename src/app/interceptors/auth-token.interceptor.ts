import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (localStorage.getItem('jwtToken')) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': String(localStorage.getItem('jwtToken'))
                }
            })
        }
        return next.handle(request);
    }
}
