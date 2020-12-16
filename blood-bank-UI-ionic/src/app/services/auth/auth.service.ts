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
    this.getUser().subscribe(res => {
      return res !== null;
    });
  }
  setUser(username) {
    this.user.next(username);
    localStorage.setItem('usr', username);
  }
}
