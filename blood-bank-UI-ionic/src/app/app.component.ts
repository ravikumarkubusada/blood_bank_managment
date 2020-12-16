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
  user= null;

  ngOnInit() {
   this.user = this.auth.getUser();
   console.log(this.user);
  }

  logout() {
    this.route.navigateByUrl('/login');
  }
}
