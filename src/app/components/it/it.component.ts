import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordresetformComponent } from '../../components/forms/passwordresetform/passwordresetform.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ituser } from '../../shared/it';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ItComponent implements OnInit {

  itForm: FormGroup;
  it: Ituser;
  loading = false;
  submitted = false;


  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.itForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  createForm() {
    this.itForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ''
    })
  }

  openLoginForm() {
    this.dialog.open(PasswordresetformComponent, { width: '500px', height: '500px' });
    console.log("Opened form")
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.itForm.controls;
  }


  onSubmit() {
    this.submitted = true;

  }


}
