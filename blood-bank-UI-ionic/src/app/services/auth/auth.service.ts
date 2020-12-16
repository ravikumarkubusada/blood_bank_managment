import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new Subject<any>();
  constructor() { }

  getUser(): Observable<any> {
    this.user.next(localStorage.getItem('usr'));
    return this.user.asObservable();
  }

  isUserLoggedIn() {
    return localStorage.getItem('usr') !== null;
  }
  setUser(username) {
    this.user.next(username);
    localStorage.setItem('usr', username);
  }

  clear() {
    localStorage.clear();
    this.user.next(null);
  }
}
