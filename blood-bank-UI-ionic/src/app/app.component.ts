import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private route: Router, private auth: AuthService) { }
  user = null;

  ngOnInit() {
    this.user = localStorage.getItem('usr');
    if (this.user === null) {
      this.auth.getUser().subscribe(res => {
        this.user = res;
      });
    }
  }

  // ionViewWillEnter() {
  //   this.user = localStorage.getItem('usr');
  //   if (this.user === null) {
  //     this.auth.getUser().subscribe(res => {
  //       this.user = res;
  //     });
  //   }
  // }

  logout() {
    this.user = null;
    this.auth.clear();
    this.route.navigateByUrl('/login');
  }
}
