import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  _id: string;
  category: Category;

  constructor(private route: ActivatedRoute, private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = new Category();

    this._id = this.route.snapshot.params['_id'];

    this.categoryService.getCategory(this._id)
      .subscribe(data => {
        this.category = data;
      }, error => console.log(error));
  }

  updateCategory() {
    this.categoryService.updateCategory(this._id, this.category)
      .subscribe(data => {
        console.log(data);
        this.category = new Category();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCategory();
  }

  gotoList() {
    this.router.navigate(['/default/Category']);
  }
}
