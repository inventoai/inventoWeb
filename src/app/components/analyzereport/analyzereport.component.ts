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
    console.log("Check roles");
    console.log(this.userAccessRoles.roles.analyzereport);
    if (this.userAccessRoles.roles.analyzereport == false) {
      this.router.navigate(['/default/testing']);
    }
  }

}
