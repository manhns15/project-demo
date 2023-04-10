import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    const url = `${this.BASE_URL}user/login`;
    const body = {
      user: {
        email: email,
        password: password
      }
    }
  }
}
