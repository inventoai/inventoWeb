import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseApiService } from '../../services/database-api.service';

@Component({
  selector: 'app-businesslocation',
  templateUrl: './businesslocation.component.html',
  styleUrls: ['./businesslocation.component.scss']
})
export class BusinesslocationComponent implements OnInit {

  numberForm:FormGroup;
  data = [];
 
  numbers = [1,2,3,4,5,6,7,8,9,10];



  searchText;
 

 
  constructor(private userApi: DatabaseApiService,
              private fb:FormBuilder) {
  }
 
  ngOnInit() {
 
    this.numberForm = this.fb.group({
      number: [null]
    });

    this.userApi.getBusinessLocation().subscribe((data: any[])=>{
      this.data = data;
    });
  }
 
  submit() {
    console.log("Form Submitted")
    console.log(this.numberForm.value)
  }

}
