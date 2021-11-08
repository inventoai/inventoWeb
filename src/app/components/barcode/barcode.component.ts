import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DateRange } from "igniteui-angular";

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { Barcode } from 'src/app/shared/models/invento';
import { InventoService } from 'src/app/services/invento.service';
import { LoginService } from '../logins/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;

  userAccessRoles;
  public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };

  barcodes: Observable<Barcode[]>;
  head = [['S.No', 'Date', 'Business Location', 'No of Inbound Scan', 'No of Outbound Scan', 'No of Internal Scan']];

  searchText;
  


 
  constructor(private barcodeApi: InventoService, private userRolesService: LoginService, private router: Router) {
    console.log(this.userRolesService.roles);
    this.userAccessRoles = this.userRolesService.roles;
   }
 
  ngOnInit() {
    console.log("Check roles");
    console.log(this.userAccessRoles.roles.barcodescanner);
    if (this.userAccessRoles.roles.barcodescanner == false) {
      this.router.navigate(['/default/testing']);
    }
    this.reloadData();
    console.log(this.barcodes);
  }
  reloadData() {
    this.barcodes = this.barcodeApi.getBarcodelist();
    console.log("Not Working")
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
        
        PDF.save('angular-demo.pdf');
    });     
    }

}
