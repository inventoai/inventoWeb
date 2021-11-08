import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Scan, BusinessLocation } from '../../shared/scan';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScanComponent implements OnInit {
  scanForm: FormGroup;
  scan: Scan;
  businessLocation = BusinessLocation;
  disableSelect = new FormControl(false);

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm(): void {
    this.scanForm = this.fb.group({
      daterange: ['', Validators.required],
      businesslocation: [null],
    });
  }
  ngOnInit(): void {
  }
  submit() {
    this.scan = this.scanForm.value;
    console.log(this.scan);
    alert("Success");
    this.scanForm.reset();

  }

}
