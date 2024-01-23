import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * using interceptor template
 */

export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  /**
   * intercept api call`s
   * @param req request to api
   * @param next request manager
   * @returns returns an observable
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authToken = environment.authToken;

      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
      return next.handle(authReq);
  }
}
