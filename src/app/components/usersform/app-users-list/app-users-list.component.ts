import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUsers } from '../../employee/models/employee';
import { AppusersService } from '../services/appusers.service';

@Component({
  selector: 'app-app-users-list',
  templateUrl: './app-users-list.component.html',
  styleUrls: ['./app-users-list.component.scss']
})
export class AppUsersListComponent implements OnInit {


  appUsers: Observable<AppUsers[]>;
  roles = ''
  userAccessRoles;

  constructor(private appUsersService: AppusersService,
    private router: Router) {
  }

  ngOnInit() {
    let clientName = JSON.parse(localStorage.getItem("credential")).name;
    // console.log(auth);
    if (clientName != "Defel" && clientName != "Izeetek") {
      this.router.navigate(['/default/testing']);
    }
    this.reloadData();
    console.log(this.appUsers);
    console.log(" Working")

  }

  reloadData() {
    this.appUsers = this.appUsersService.getAppUsersList();
    console.log("Not Working")
  }

  deleteUser(_id: string) {
    this.appUsersService.deleteAppUser(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateUser(id: string) {
    alert("This button is disable.")
    // this.router.navigate(['/default/updateemployee', id]);
  }
  userDetails(_id: string) {
    this.router.navigate(['default/detailsemployee', _id]);
  }



  searchText;


}
