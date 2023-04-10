import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = 'http://localhost:3000/'

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    JSON.parse(localStorage.getItem('currentUser') || 'null')
  )
  constructor(private httpClient: HttpClient) { }
  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public currentUser(): Observable<User> {
    return this.currentUserSubject;
  }

  public setCurrentUser(user: User) {
    this.currentUserSubject.next(user);
  }
}
