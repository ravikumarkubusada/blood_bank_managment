import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  mode:string;

  constructor() { }

  ngOnInit() {
    this.mode = 'Add';
  }

}
