import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { UserApiService } from '../../../services/user-api.service';
import { ReportType, BusinessLocation } from '../../../shared/analysereport';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-locationwise',
  templateUrl: './locationwise.component.html',
  styleUrls: ['./locationwise.component.scss']
})
export class LocationwiseComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef
 
  reportType = ReportType;
  businessLocation = BusinessLocation;
  data = [];
  disableSelect = new FormControl(false);
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
