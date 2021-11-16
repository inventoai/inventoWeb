import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

    roles;
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getClientList(): Observable<any> {
        return this.http.get(`${environment.inventoServer}/admin`)
    }

    // AdminLogin(Form) {
    //     return this.http.post<User>(`${environment.inventoServer}/loginadmin`, Form);
    // }
    // WebuserLogin(_clientId:string, Form) {
    //     return this.http.post<User>(`${environment.inventoServer}/webuserlogin/${_clientId}`, Form);
    // }
    login(loginType: string, Form) {
        // let auth = JSON.parse(localStorage.getItem("credential")).id;
        return this.http.post<User>(`${environment.inventoServer}/${loginType}`, Form);
    }

    logout() {
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.inventoServer} / users / register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.inventoServer} / users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.inventoServer} / users / ${id}`);
    }




}