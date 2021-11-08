import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsuheader',
  templateUrl: './bsuheader.component.html',
  styleUrls: ['./bsuheader.component.scss']
})
export class BsuheaderComponent implements OnInit {

  users= '';


  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor() { }

  ngOnInit(): void {
    this.users = '../../assets/images/Img1.png';
  }

}
