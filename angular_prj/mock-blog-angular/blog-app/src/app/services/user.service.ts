import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, debounceTime, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { IProfile, IUser, IUserUpdate } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    BASE_URL = "https://conduit.productionready.io/api/";

    private currentUserSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(
        JSON.parse(localStorage.getItem('currentUser') || 'null')
    );

    constructor(private httpClient: HttpClient) {
    }

    public currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

    public currentUser(): Observable<IUser> {
        return this.currentUserSubject;
    }

    public setCurrentUser(user: IUser) {
        this.currentUserSubject.next(user);
    }

    getCurrentUser(): Observable<IUser> {
        const url = `${this.BASE_URL}user`;
        return this.httpClient.get<IUser>(url).pipe(
            catchError(this.handleError),
            tap((user) => {
                localStorage.setItem('imageUser', JSON.stringify(user.user.image));
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            })
        )
    }

    updateUser(userUpdate : IUserUpdate) {
        const url = `${this.BASE_URL}user`;
        const body: IUserUpdate = userUpdate
        return this.httpClient.put<IUser>(url, body).pipe(
            catchError(this.handleError),
            tap((user) => {
                localStorage.setItem('imageUser', JSON.stringify(user.user.image));
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            })
        )
    }

    getProfile(username: string) {
        const url = `${this.BASE_URL}profiles/${username}`;
        return this.httpClient.get<IProfile>(url).pipe(
            catchError(this.handleError)
        )
    }

    followUser(username: string) {
        const url = `${this.BASE_URL}profiles/${username}/follow`;
        return this.httpClient.post<IProfile>(url, {}).pipe(
            catchError(this.handleError))

    }

    unfollowUser(username: string) {
        const url = `${this.BASE_URL}profiles/${username}/follow`;
        return this.httpClient.delete<IProfile>(url).pipe(
            catchError(this.handleError))
    }

    private handleError(error: HttpErrorResponse) {
        Swal.fire({
            icon: 'error',
            title:  'Oops, something went wrong. Please try again later',
            confirmButtonText: 'OK',
            confirmButtonColor: '#fa6342',
            
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              return true 
            } else {
              return false
            }
          })
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }

}
