import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../logins/services/login.service';

@Component({
  selector: 'app-advanceslotting',
  templateUrl: './advanceslotting.component.html',
  styleUrls: ['./advanceslotting.component.scss']
})
export class AdvanceslottingComponent implements OnInit {
  userAccessRoles
  constructor(private userRolesService: LoginService, private router: Router) {
    console.log(this.userRolesService.roles);
    this.userAccessRoles = this.userRolesService.roles;
   }

  ngOnInit() {
    console.log("Check roles");
    console.log(this.userAccessRoles.roles.advanceslotting);
    if (this.userAccessRoles.roles.advanceslotting == false) {
      this.router.navigate(['/default/testing']);
    }
  }

}
