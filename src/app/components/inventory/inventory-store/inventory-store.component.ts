import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoService } from 'src/app/services/invento.service';

@Component({
  selector: 'app-inventory-store',
  templateUrl: './inventory-store.component.html',
  styleUrls: ['./inventory-store.component.scss']
})
export class InventoryStoreComponent implements OnInit {

  submitted = false;
  inventoryForm = {
    phyInvDoc: "",
    item: "",
    procedure: "",
    piStatus: "",
    actyArea: "",
    binNo: "",
    hghLvlHU: "",
    product: "",
    prodDesc: "",
    batch: "",
    counter: "",
    bookQuantity: ""
  }

  constructor(private router: Router, private _location: Location, private inventoryService: InventoService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.inventoryForm);
    this.submitted = true;
    this.inventoryService.registerInventory(this.inventoryForm).subscribe(data => {
      console.log(data);
      this._location.back();
    });
  }

  cancel() {
    this._location.back();
  }
}
