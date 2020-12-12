import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAlldata();
  }

  getAlldata() {
    this.http.get('http://localhost:8080/api/bloodbank/').subscribe(res => {
      this.data = res;
    });

  }

}
