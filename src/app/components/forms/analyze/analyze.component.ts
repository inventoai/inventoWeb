import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl} from '@angular/forms';
import { BusinessLocation } from 'src/app/shared/userform';
import { AnalyzeType } from 'src/app/shared/analysereport';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {

   
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  businessLocation = BusinessLocation;
  analyzeType = AnalyzeType;
  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
  }

}
