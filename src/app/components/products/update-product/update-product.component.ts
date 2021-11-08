import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryType } from 'src/app/shared/analysereport';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  _id: string;
  product: Product;
  disableSelect = new FormControl(false);
  categoryType = CategoryType;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this._id = this.route.snapshot.params['_id'];

    this.productService.getProduct(this._id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.productService.updateProduct(this._id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/default/Product']);
  }
}
