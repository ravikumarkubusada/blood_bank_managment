import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  data: any;
  searchText: string;
  isUserLoggedIn = false;
  constructor(private http: HttpClient, private auth: AuthService
  ) { }

  ngOnInit() {
    this.getAlldata();
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  getAlldata() {
    this.http.get('http://localhost:8080/api/bloodbank/').subscribe(res => {
      this.data = res;
    });

  }

  search() {
    const grps = this.searchText.split(',');
    this.data = this.data.filter(function (itm) {
      return grps.indexOf(itm.bloodGroupId) > -1;
    });
  }

}
