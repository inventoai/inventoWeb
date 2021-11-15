import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebUsers } from '../../employee/models/employee';
import { WebuserService } from '../services/webuser.service';

@Component({
  selector: 'app-web-users-list',
  templateUrl: './web-users-list.component.html',
  styleUrls: ['./web-users-list.component.scss']
})
export class WebUsersListComponent implements OnInit {


  webUsers: Observable<WebUsers[]>;
  userAccessRoles;

  constructor(private appUsersService: WebuserService, private router: Router) { }

  ngOnInit() {
    let clientName = JSON.parse(localStorage.getItem("credential")).name;
    // console.log(auth);
    if (clientName != "Defel" && clientName != "Izeetek") {
      this.router.navigate(['/default/testing']);
    }
    this.reloadData();
    // console.log(this.webUsers);
    // console.log(" Working")
  }

  reloadData() {
    this.webUsers = this.appUsersService.getWebUsersList();
    // console.log("Not Working");
  }

  deleteUser(_id: string) {
    this.appUsersService.deleteWebUser(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateUser(id: string) {
    this.router.navigate(['/default/updatewebuser', id]);
  }
  webUserDetails(_id: string) {
    this.router.navigate(['default/detailswebusers', _id]);
  }



  searchText;

}
