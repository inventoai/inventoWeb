import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserApiService } from '../../../services/user-api.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BusinessLocation } from 'src/app/shared/userform';

@Component({
  selector: 'app-stockdataanalysis',
  templateUrl: './stockdataanalysis.component.html',
  styleUrls: ['./stockdataanalysis.component.scss']
})
export class StockdataanalysisComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef

  data = [];
  searchText;
  businessLocation = BusinessLocation;
  disableSelect = new FormControl(false);

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

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
