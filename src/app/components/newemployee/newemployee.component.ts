import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User, DepartmentType, BusinessLocation, State, District } from 'src/app/shared/userform';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.scss']
})
export class NewemployeeComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  userObj: object = {};
  departmentType = DepartmentType;
  businessLocation = BusinessLocation;
  states = State;
  districts = District;

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

  formErrors = {
    'username': '',
    'mobilenumber': '',
    'email': ''
  };

  validationMessages = {
    'username': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },

    'mobilenumber': {
      'required': 'Mob. number is required.',
      'pattern': 'Mob. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
    private employeeService: EmployeeService) {
    this.createForm();
  }

  ngOnInit() {
    this.imgURL = `/assets/images/logo1.png`;
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      mobilenumber: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      departmenttype: [null],
      businesslocation: [null],
      employeeid: ['', [Validators.required, Validators.pattern]],
      state: [null],
      district: [null],
      address: '',
      img: '',
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }



  submit() {
    /* console.log(this.userForm.value);
     this.http.post('http://localhost:3000/userDB.json', this.userForm.value)
       .subscribe(res => {
         console.log(res);
         alert('Uploaded Successfully.');
       }) */

    this.user = this.userForm.value;
    console.log(this.user);

    this.employeeService.create(this.user).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });

  }

}
