import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";
import { LoginService } from "../../logins/services/login.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  searchText;
  userAccessRoles
  categories: Observable<Category[]>;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private categoryService: CategoryService, private userRolesService: LoginService, private router: Router) {
    console.log(this.userRolesService.roles);
    this.userAccessRoles = this.userRolesService.roles;
   }

  ngOnInit() {
    console.log("Check roles");
    console.log(this.userAccessRoles.roles.category);
    if (this.userAccessRoles.roles.category == false) {
      this.router.navigate(['/default/testing']);
    }
    this.reloadData();
    console.log(this.categories);
    console.log(" Working")

  }

  reloadData() {
    this.categories = this.categoryService.getCategorylist();
    console.log("Not Working")
  }

  deleteCategory(_id: string) {
    this.categoryService.deleteCategory(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateCategory(id: string) {
    this.router.navigate(['/default/updatecategory', id]);
  }
  userDetails(_id: string) {
    this.router.navigate(['detailsemployee', _id]);
  }

}