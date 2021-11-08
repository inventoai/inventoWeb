import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoService } from 'src/app/services/invento.service';
import { FrequentLevel3 } from 'src/app/shared/models/invento';


@Component({
  selector: 'app-frequent3',
  templateUrl: './frequent3.component.html',
  styleUrls: ['./frequent3.component.scss']
})
export class Frequent3Component implements OnInit {

  frequentLevel3: Observable<FrequentLevel3>
  searchText;


  constructor(private inventoFrequentLevel3Api: InventoService) { }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.frequentLevel3);
  }

  reloadData() {
    this.frequentLevel3 = this.inventoFrequentLevel3Api.getFrequentLevel3list();
  }

}
