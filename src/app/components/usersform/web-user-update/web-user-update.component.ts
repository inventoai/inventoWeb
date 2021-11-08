import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessLocation, DepartmentType, District, State } from 'src/app/shared/userform';
import { WebUsers } from '../../employee/models/employee';
import { WebuserService } from '../services/webuser.service';

@Component({
  selector: 'app-web-user-update',
  templateUrl: './web-user-update.component.html',
  styleUrls: ['./web-user-update.component.scss']
})
export class WebUserUpdateComponent implements OnInit {

  _id: string;
  imageSrc: string;
  userWebAccess: WebUsers;
  submitted = false;

  departmentType = DepartmentType;
  businessLocation = BusinessLocation;
  states = State;
  districts = District;
  disableSelect = new FormControl(false);
 
 
  constructor(private route: ActivatedRoute, private router: Router,
    private webUserService: WebuserService) { }

  ngOnInit() {
    this.userWebAccess = new WebUsers();

    this._id = this.route.snapshot.params['_id'];

    this.webUserService.getWebUser(this._id)
      .subscribe(data => {
        this.userWebAccess = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.webUserService.updateWebUser(this._id, this.userWebAccess)
      .subscribe(data => {
        console.log(data);
        this.userWebAccess = new WebUsers();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/default/Web Users']);
  }

}
