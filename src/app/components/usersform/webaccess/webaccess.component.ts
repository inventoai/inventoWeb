import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { BusinessLocation, DepartmentType, District, State } from 'src/app/shared/userform';
import { WebUsers } from '../../employee/models/employee';
import { WebuserService } from '../services/webuser.service';
import { Router } from '@angular/router';
      
@Component({
  selector: 'app-webaccess',
  templateUrl: './webaccess.component.html',
  styleUrls: ['./webaccess.component.scss']
})
export class WebaccessComponent implements OnInit {
  imageSrc: string;
  userWebAccessForm: FormGroup;
  userWebAccess: WebUsers;
  submitted = false;

  departmentType = DepartmentType;
  businessLocation = BusinessLocation;
  states = State;
  districts = District;
  disableSelect = new FormControl(false);
 
 
 constructor(private fb:FormBuilder, private webUserService: WebuserService, private router: Router) { }
   
 get f(){
   return this.userWebAccessForm.controls;
 }
  
 onFileChange(event) {
   const reader = new FileReader();
   
   if(event.target.files && event.target.files.length) {
     const [file] = event.target.files;
     reader.readAsDataURL(file);
   
     reader.onload = () => {
  
       this.imageSrc = reader.result as string;
    
       this.userWebAccessForm.patchValue({
         fileSource: reader.result
       });
  
     };
  
   }
 }

 ngOnInit(): void {
  this.createForm();
  }

  createForm() {
    this.userWebAccessForm = this.fb.group({
      userName: '',
      password: '',
      mobile: '',
      emailId: '',
      employeeId: '',
      photo: '',
      departmentType: '',
      location: '',
      state: '',
      city: '',
      address: '',
      roles: this.fb.group({
       advanceslotting: false,
       analyzereport: false,
       barcodescanner: false,
       location: false,
       category: false,
       forecast: false,
       inventorycount: false,
       product: false
     })
    })
  }
 
  save() {
    this.webUserService
      .createWebUser(this.userWebAccess).subscribe(data => {
        console.log(data)
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.userWebAccess = this.userWebAccessForm.value;
    console.log(this.userWebAccess);
    this.save();
  }

  gotoList() {
    this.router.navigate(['/default/Web Users']);
  }
 
}