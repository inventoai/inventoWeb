import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BusineslocationService } from "../services/busineslocation.service";
import { Businesslocation } from "../models/businesslocations";
import { Router } from '@angular/router';
import { LoginService } from "../../logins/services/login.service";

@Component({
  selector: 'app-business-location',
  templateUrl: './business-location.component.html',
  styleUrls: ['./business-location.component.scss']
})
export class BusinessLocationComponent implements OnInit {

  searchText;
  userAccessRoles
  locations: Observable<Businesslocation[]>;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private employeeService: BusineslocationService, private userRolesService: LoginService, private router: Router) {
    // console.log(this.userRolesService.roles);
    // this.userAccessRoles = this.userRolesService.roles;
  }

  ngOnInit() {
    let auth = JSON.parse(localStorage.getItem("credential"));
    // console.log(auth);
    try {
      // Calling an undefined `item `variable
      if (auth.roles.location == false) {
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

    this.reloadData();
    console.log(this.locations);
    console.log(" Working")

  }

  reloadData() {
    this.locations = this.employeeService.getLocationlist();
    console.log("Not Working")
  }

  deleteUser(_id: string) {
    this.employeeService.deleteLocation(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateUser(id: string) {
    this.router.navigate(['/default/updatelocation', id]);
  }
  userDetails(_id: string) {
    this.router.navigate(['detailsemployee', _id]);
  }

}