import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordresetformComponent } from '../../forms/passwordresetform/passwordresetform.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    form: FormGroup;
    hide = true;
    loading = false;
    submitted = false;
    userAccessRoles;
    clients: Observable<any>;
    // clientId;
    selected = 'loginadmin';

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
        console.log(this.selected, Form);

        this.loginService.login(this.selected, Form).subscribe(data => {
            // this.userAccessRoles = data;
            // console.log(this.userAccessRoles);
            console.log(data);
            // Create item:
            // let myObj = { name: 'Ravi', profession: 'Developer' };
            // localStorage.setItem("credential", JSON.stringify(myObj));
            localStorage.setItem("credential", JSON.stringify(data));
            // Read item:
            // let item = JSON.parse(localStorage.getItem("credential"));
            // console.log(item);
            this.gotoDashboard();
        },
            error => console.log(error));
    }
    gotoDashboard() {
        // this.loginService.roles = this.userAccessRoles;
        // console.log(this.loginService.roles);
        this.router.navigate(['/default/Dashboard']);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    openLoginForm() {
        this.dialog.open(PasswordresetformComponent, { width: '500px', height: '500px' });
        console.log("Opened form")
    }

    // fetchClients(loginType) {
    //     console.log(loginType);
    //     this.clientId = document.getElementById("clientBlockId");
    //     if (loginType == "webusers") {
    //         this.clientId.style.display = "block";
    //         this.loginService.getClientList().subscribe(data => {
    //             this.clients = data;
    //             console.log(this.clients);
    //         },
    //             err => console.log(err)
    //         );
    //     }
    //     else {
    //         this.clientId.style.display = "none";
    //     }
    // }

}