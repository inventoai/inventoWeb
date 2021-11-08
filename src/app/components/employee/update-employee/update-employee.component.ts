import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { FormControl } from '@angular/forms';
import { DepartmentType, District, State } from 'src/app/shared/userform';
import { BusinessLocation } from 'src/app/shared/analysereport';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  _id: string;
  employee: Employee;
  disableSelect = new FormControl(false);
  departmentType = DepartmentType
  businessLocation = BusinessLocation;
  states = State;
  districts = District;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this._id = this.route.snapshot.params['_id'];

    this.employeeService.getEmployee(this._id)
      .subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.employeeService.updateEmployee(this._id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/default/Employee']);
  }




  
  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
