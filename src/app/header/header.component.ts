import { Component, OnInit } from '@angular/core';
import { LoginService } from '../components/logins/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  users= '';


  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.users = '../../assets/images/Img1.png';
  }

  logout() {
    this.loginService.logout();
}

}
