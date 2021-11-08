import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BusinessLocation, DepartmentType, District, State } from 'src/app/shared/userform';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.category = new Category();
  }

  save() {
    this.categoryService
      .createCategory(this.category).subscribe(data => {
        console.log(data)
        this.category = new Category();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/default/Category']);
  }









  departmentType = DepartmentType;
  businessLocation = BusinessLocation;
  states = State;
  districts = District;

  disableSelect = new FormControl(false);



}