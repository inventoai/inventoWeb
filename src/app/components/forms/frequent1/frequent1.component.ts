import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoService } from 'src/app/services/invento.service';
import { FrequentLevel1 } from 'src/app/shared/models/invento';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-frequent1',
  templateUrl: './frequent1.component.html',
  styleUrls: ['./frequent1.component.scss']
})
export class Frequent1Component implements OnInit {

  frequentLevel1: Observable<FrequentLevel1[]>;
  searchText;


  constructor(private inventoFrequentLevel1Api: InventoService) { }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.frequentLevel1);
  }

  reloadData() {
    this.frequentLevel1 = this.inventoFrequentLevel1Api.getFrequentLevel1list();
  }

}
