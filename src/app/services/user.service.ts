import { Injectable } from '@angular/core';
import { User } from '../../shared/user';
import { USERS } from '../../shared/users';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /*getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS), 3000);
    });
  } */

  getUsers(): Observable<User[]> {
    return of(USERS).pipe(delay(2000));
  }


  /* getLeader(id: String): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 3000);
    });
  } */
  getUser(id: string): Observable<User> {
    return of(USERS.filter((user) => (user.id === id))[0]).pipe(delay(2000));
  }

  /* getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.featured))[0]), 3000);
    });
  } */
  getFeaturedUser(): Observable<User> {
    return of(USERS.filter((user) => (user.featured))[0]).pipe(delay(2000));
  }
}





