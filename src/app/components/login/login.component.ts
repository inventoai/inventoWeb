import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logo = '';

  constructor() { }

  ngOnInit(): void {
    this.logo = `assets/images/inventoLogo.jpg`;
  }
  click() {
    alert("BSU page is under construction.");
  }

}
