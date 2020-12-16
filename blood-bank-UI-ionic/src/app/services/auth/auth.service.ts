import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUser() {
    return localStorage.getItem('usr');
  }
  isUserLoggedIn() {
    return this.getUser() !== null;
  }
  setUser(username) {
    localStorage.setItem('usr', username);
  }
}
