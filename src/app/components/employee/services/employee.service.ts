import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private baseUrl = 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com/employees';
  //private baseUrl = 'http://127.0.0.1:4000/employees';


  constructor(private http: HttpClient) { }

  getEmployee(_id: string): Observable<any> {
    return this.http.get(`${environment.inventoServer}/employees/${_id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${environment.inventoServer}/employees`, employee);
  }

  updateEmployee(_id: string, value: any): Observable<Object> {
    return this.http.put(`${environment.inventoServer}/employees/${_id}`, value);
  }

  deleteEmployee(_id: string): Observable<any> {
    return this.http.delete(`${environment.inventoServer}/employees/${_id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${environment.inventoServer}/employees`);
  }
}
