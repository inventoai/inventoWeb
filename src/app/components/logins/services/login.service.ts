import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class LoginService {

    roles;
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    login(Form) {
        return this.http.post<User>(`${environment.inventoServer}/webuserlogin`, Form);
    }

    logout() {
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.inventoServer}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.inventoServer}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.inventoServer}/users/${id}`);
    }




}