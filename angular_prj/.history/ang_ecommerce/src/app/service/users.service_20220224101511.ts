import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = 'http://localhost:3000/'

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    JSON.parse(localStorage.getItem('currentUser') || 'null')
  )
  constructor() { }

}
