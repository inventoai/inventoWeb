import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordresetformComponent } from '../../forms/passwordresetform/passwordresetform.component';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    userAccessRoles;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        let Form = JSON.stringify(this.form.value);
        console.log(Form);
        this.loginService.login(Form).subscribe(data => {
            this.userAccessRoles = data;
            console.log(this.userAccessRoles);
            this.gotoDashboard();
        },
            error => console.log(error));
    }
    gotoDashboard() {
        this.loginService.roles = this.userAccessRoles;
        console.log(this.loginService.roles);
        this.router.navigate(['/default/Dashboard']);
    }

    openLoginForm() {
        this.dialog.open(PasswordresetformComponent, { width: '500px', height: '500px' });
        console.log("Opened form")
    }

}