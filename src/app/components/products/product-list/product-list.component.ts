import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";
import { Router } from '@angular/router';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchText;
  userAccessRoles;
  products: Observable<Product[]>;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    let auth = JSON.parse(localStorage.getItem("credential"));
    // console.log(auth);
    try {
      // Calling an undefined `item `variable
      if (auth.roles.product == false) {
        console.log("Hello !" + auth.name);
        this.router.navigate(['/default/testing']);
      }
    } catch (e) {
      if (e instanceof ReferenceError) {
        console.log(e, true);
        console.log("Hi ! " + auth.name);
      } else {
        console.log(e, false);
        console.log("Hi ! " + auth.name);
      }
    }
    this.reloadData();
    // console.log(this.products);
    // console.log(" Working")

  }

  reloadData() {
    this.products = this.productService.getProductlist();
    // console.log("Not Working")
  }

  deleteProduct(_id: string) {
    this.productService.deleteProduct(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateProduct(id: string) {
    this.router.navigate(['/default/updateproduct', id]);
  }

}