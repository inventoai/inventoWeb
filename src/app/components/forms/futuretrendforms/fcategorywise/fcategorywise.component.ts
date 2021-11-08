import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CategoryType, ReportType } from 'src/app/shared/analysereport';
import { UserApiService } from '../../../../services/user-api.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-fcategorywise',
  templateUrl: './fcategorywise.component.html',
  styleUrls: ['./fcategorywise.component.scss']
})
export class FcategorywiseComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef

  data = [];
  disableSelect = new FormControl(false);
  reportType = ReportType;
  categoryType = CategoryType;
  searchText;

  constructor(private userApi: UserApiService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
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
    console.log("Form Submitted");
  }


}
