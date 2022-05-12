import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = 'ghhssjhejsehfjh';

    const reqest = req.clone({
      url: req.url.replace('http', 'https'),
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      })
    });

    return next.handle(reqest);
  }
}
