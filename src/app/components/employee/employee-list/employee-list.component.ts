import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeService } from "../services/employee.service";
import { Employee } from "../models/employee";
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees:Observable<Employee[]>;
  
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
    console.log(this.employees);
    console.log(" Working")

  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
    console.log("Not Working")
}

  deleteUser(_id: string) {
    this.employeeService.deleteEmployee(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateUser(id: string) {
    this.router.navigate(['/default/updateemployee', id]);
  }
  userDetails(_id: string) {
    this.router.navigate(['default/detailsemployee', _id]);
  }







  numberForm:FormGroup;
  searchText;
 
  numbers = [
    { id: 1, name: "01" },
    { id: 2, name: "02" },
    { id: 3, name: "03" },
    { id: 4, name: "04" },
    { id: 5, name: "05" },
    { id: 6, name: "06" },
    { id: 7, name: "07" },
    { id: 8, name: "08" },
    { id: 9, name: "09" },
  ];



}