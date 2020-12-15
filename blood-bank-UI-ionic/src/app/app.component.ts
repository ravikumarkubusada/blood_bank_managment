import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private route: Router) { }
  user= null;

  ngOnInit() {
    this.user = localStorage.getItem('usr');
    console.log(this.user);
  }

  logout() {
    this.route.navigateByUrl('/login');
  }
}
