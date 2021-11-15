import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../logins/services/login.service';

@Component({
  selector: 'app-analyzereport',
  templateUrl: './analyzereport.component.html',
  styleUrls: ['./analyzereport.component.scss']
})
export class AnalyzereportComponent implements OnInit {
  userAccessRoles;

  constructor(private userRolesService: LoginService, private router: Router) {
    console.log(this.userRolesService.roles);
    this.userAccessRoles = this.userRolesService.roles;
  }

  ngOnInit() {
    let auth = JSON.parse(localStorage.getItem("credential"));
    // console.log(auth);
    try {
      // Calling an undefined `item `variable
      if (auth.roles.analyzereport == false) {
        console.log("Hello !" + auth.name);
        this.router.navigate(['/default/testing']);
      }
    } catch (e) {
      if (e instanceof ReferenceError) {
        console.log(e, true);
        console.log("Hi ! " + auth.name);
      } else {
        console.log(e, false);
        console.log("Hi ! " + auth.name);
      }
    }
  }

}
