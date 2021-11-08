import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";
import { Router } from '@angular/router';
import { ProductService } from "../services/product.service";
import { LoginService } from "../../logins/services/login.service";

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

  constructor(private productService: ProductService,private userRolesService:LoginService, private router: Router) {
    console.log(this.userRolesService.roles);
    this.userAccessRoles = this.userRolesService.roles;
   }

  ngOnInit() {
    console.log("Check roles");
    console.log(this.userAccessRoles.roles.product);
    if (this.userAccessRoles.roles.product == false) {
      this.router.navigate(['/default/testing']);
    }
    this.reloadData();
    console.log(this.products);
    console.log(" Working")

  }

  reloadData() {
    this.products = this.productService.getProductlist();
    console.log("Not Working")
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