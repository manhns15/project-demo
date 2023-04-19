import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:3000/'
  constructor(
    private httpClient: HttpClient,
    private userService: UsersService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}login`;
    const body = {
      user: {
        email: email,
        password: password
      }
    }
    return this.httpClient.post<User>(url, body).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userService.setCurrentUser(user)
      })
    )
  }
  register(username: string, email: string, password: string) {
    const url = `${this.BASE_URL}users`;
    const body = {
      user: {
        username: username,
        email: email,
        password: password
      }
    }
    return this.httpClient.post<User>(url, body).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userService.setCurrentUser(user);
      })
    )
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.userService.setCurrentUser(null as any);
    this.router.navigate(['login'])
  }
}
