import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl } from '@angular/forms';
import { ProductType } from 'src/app/shared/analysereport';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { ProductRelation } from 'src/app/shared/models/invento';
import { InventoService } from 'src/app/services/invento.service';

@Component({
  selector: 'app-productrelation',
  templateUrl: './productrelation.component.html',
  styleUrls: ['./productrelation.component.scss']
})
export class ProductrelationComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef

  productRelation: Observable<ProductRelation>
  productType = ProductType;
  disableSelect = new FormControl(false);
  searchText;




  constructor(private productRelationApi: InventoService) {
  }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.productRelation);
  }

  reloadData() {
    this.productRelation = this.productRelationApi.getProductRelationlist();
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

  submit() {
    console.log("Form Submitted");
  }

}
