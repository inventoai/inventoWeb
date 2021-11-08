import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordresetformComponent } from '../../components/forms/passwordresetform/passwordresetform.component';

@Component({
  selector: 'app-bsu',
  templateUrl: './bsu.component.html',
  styleUrls: ['./bsu.component.scss']
})
export class BsuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(PasswordresetformComponent, {width: '500px', height: '500px'});
    console.log("Opened form")
  }

}
