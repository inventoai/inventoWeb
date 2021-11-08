import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  numberForm: FormGroup;
  data = [];

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



  searchText;




  constructor(private userApi: UserApiService,
    private fb: FormBuilder) {
  }

  ngOnInit() {

    this.numberForm = this.fb.group({
      number: [null]
    });

    this.userApi.getProductWise().subscribe((data: any[]) => {
      this.data = data;
    });
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.numberForm.value)
  }
}
