import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BusinessLocation, DepartmentType, District, State } from 'src/app/shared/userform';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CategoryType } from 'src/app/shared/analysereport';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;
  categoryType = CategoryType;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.productService
      .createProduct(this.product).subscribe(data => {
        console.log(data)
        this.product = new Product();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/default/Product']);
  }









  departmentType = DepartmentType;
  businessLocation = BusinessLocation;
  states = State;
  districts = District;

  disableSelect = new FormControl(false);

}