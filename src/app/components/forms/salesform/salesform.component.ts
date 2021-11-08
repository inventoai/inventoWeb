import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DatabaseApiService } from '../../../services/database-api.service';
import { ReportType, BusinessLocation, CategoryType, ProductType } from '../../../shared/analysereport';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-salesform',
  templateUrl: './salesform.component.html',
  styleUrls: ['./salesform.component.scss']
})
export class SalesformComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef

  data = [];
  reportType = ReportType;
  businessLocation = BusinessLocation;
  categoryType = CategoryType;
  productType = ProductType;
  disableSelect = new FormControl(false);
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  searchText;

  constructor(private userApi: DatabaseApiService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userApi.getForecastSales().subscribe((data: any[]) => {
      this.data = data;
    });
  }

  public openPDF(): void {
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
