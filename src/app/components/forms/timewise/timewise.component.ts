import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { UserApiService } from '../../../services/user-api.service';
import { ReportType, BusinessLocation, CategoryType, ProductType } from '../../../shared/analysereport';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-timewise',
  templateUrl: './timewise.component.html',
  styleUrls: ['./timewise.component.scss']
})
export class TimewiseComponent implements OnInit {

 
  numberForm: FormGroup;
  data = [];

  reportType = ReportType;
  businessLocation = BusinessLocation;
  categoryType = CategoryType;
  productType = ProductType;
  disableSelect = new FormControl(false);
  numbers = [
    { id: 1, name: "01" },
    { id: 2, name: "02" },
    { id: 3, name: "03" },
    { id: 4, name: "04" },
    { id: 5, name: "05" },
    { id: 6, name: "06" },
    { id: 7, name: "07" },
    { id: 8, name: "08" },
    { id: 9, name: "09" },
  ];



  searchText;




  constructor(private userApi: UserApiService,
    private fb: FormBuilder) {
  }

  ngOnInit() {

    this.numberForm = this.fb.group({
      number: [null]
    });

    this.userApi.getProductWise().subscribe((data: any[]) => {
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
    console.log("Form Submitted")
    console.log(this.numberForm.value)
  }

}
