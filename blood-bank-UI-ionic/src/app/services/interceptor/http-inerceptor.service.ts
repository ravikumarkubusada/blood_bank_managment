import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInerceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const auth = req.clone({
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        'Pragma': 'no-cache',
        'Expires': '0'
    })
    
  });
  return next.handle(auth);
  }
}
