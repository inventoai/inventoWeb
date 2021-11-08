import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoService } from 'src/app/services/invento.service';
import {FrequentLevel2 } from 'src/app/shared/models/invento';


@Component({
  selector: 'app-frequent2',
  templateUrl: './frequent2.component.html',
  styleUrls: ['./frequent2.component.scss']
})
export class Frequent2Component implements OnInit {

  frequentLevel2: Observable<FrequentLevel2[]>;
  searchText;


  constructor(private inventoFrequentLevel2Api: InventoService) { }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.frequentLevel2);
  }

  reloadData() {
    this.frequentLevel2 = this.inventoFrequentLevel2Api.getFrequentLevel2list();
  }
}
