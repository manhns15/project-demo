import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
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

  getCurrentUser(): Observable<User> {
    const url = `${this.BASE_URL}user`;
    return this.httpClient.get<User>(url).pipe(
      tap((user) => {
        // localStorage.setItem('imageUser', JSON.stringify(user.image));
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    )
  }

  updateUser(userUpdate: User) {
    const url = `${this.BASE_URL}user`;
    const body: User = userUpdate
    return this.httpClient.put<User>(url, body).pipe(
      tap((user) => {
        localStorage.setItem('imageUser', JSON.stringify(user.image));
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    )
  }
}
