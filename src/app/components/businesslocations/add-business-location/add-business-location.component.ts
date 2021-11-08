import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BusinessLocation, DepartmentType, District, State } from 'src/app/shared/userform';
import { Businesslocation } from '../models/businesslocations';
import { BusineslocationService } from '../services/busineslocation.service';

@Component({
  selector: 'app-add-business-location',
  templateUrl: './add-business-location.component.html',
  styleUrls: ['./add-business-location.component.scss']
})
export class AddBusinessLocationComponent implements OnInit {

  businesslocation: Businesslocation = new Businesslocation();
  submitted = false;

  constructor(private businesslocationService: BusineslocationService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.businesslocation = new Businesslocation();
  }

  save() {
    this.businesslocationService
      .createLocation(this.businesslocation).subscribe(data => {
        console.log(data)
        this.businesslocation = new Businesslocation();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/default/Business Location']);
  }









  departmentType = DepartmentType;
  businessLocation = BusinessLocation;
  states = State;
  districts = District;

  disableSelect = new FormControl(false);

  
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