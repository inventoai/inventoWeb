import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DateRange } from "igniteui-angular";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/shared/models/invento';
import { InventoService } from 'src/app/services/invento.service';
import { LoginService } from '../logins/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventorycount',
  templateUrl: './inventorycount.component.html',
  styleUrls: ['./inventorycount.component.scss']
})
export class InventorycountComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef

  public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
  inventory: Observable<Inventory[]>;
  searchText;
  userAccessRoles

  constructor(private inventorycountApi: InventoService, private userRolesService: LoginService, private router: Router) {
    console.log(this.userRolesService.roles);
    this.userAccessRoles = this.userRolesService.roles;
   }

  ngOnInit() {
    console.log("Check roles");
    console.log(this.userAccessRoles.roles.inventorycount);
    if (this.userAccessRoles.roles.inventorycount == false) {
      this.router.navigate(['/default/testing']);
    }
    this.reloadData();
    console.log(this.inventory);
  }
  reloadData() {
    this.inventory = this.inventorycountApi.getInventorylist();
  }

  submit() {
    console.log("Form Submitted")
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('Inventory_Data.pdf');
    });     
    }

}
