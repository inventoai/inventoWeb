import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUsers } from '../../employee/models/employee';
import { AppusersService } from '../services/appusers.service';

@Component({
  selector: 'app-access-users-group',
  templateUrl: './access-users-group.component.html',
  styleUrls: ['./access-users-group.component.scss']
})
export class AccessUsersGroupComponent implements OnInit {

  userAccessForm: FormGroup;
  userAccess: '';
  submitted = false;

  constructor(private fb: FormBuilder, private appUsersService: AppusersService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.userAccessForm = this.fb.group({
      userName: '',
      password: '',
      roles: this.fb.group({
        advanceslotting: false,
        barcodescanner: false,
        inventorycount: false
      })
    });
  }


  save() {
    this.appUsersService
      .createAppUser(this.userAccess).subscribe(data => {
        console.log(data)
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.userAccess = this.userAccessForm.value;
    console.log(this.userAccess);
    this.save();
    //this.userAccessForm.reset();
  }

  gotoList() {
    this.router.navigate(['/default/App Users']);
  }

}
