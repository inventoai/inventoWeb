import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserApiService } from '../../../services/user-api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { CommonProduct, FrequentLevel3 } from 'src/app/shared/models/invento';
import { InventoService } from 'src/app/services/invento.service';
@Component({
  selector: 'app-commonproduct',
  templateUrl: './commonproduct.component.html',
  styleUrls: ['./commonproduct.component.scss']
})
export class CommonproductComponent implements OnInit {

  commonProduct:Observable<CommonProduct>
  searchText;

  constructor(private commonProductApi: InventoService) {
  }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.commonProduct);
  }

  reloadData() {
    this.commonProduct = this.commonProductApi.getCommonProductlist();
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
