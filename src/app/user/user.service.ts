import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'Server Error');
  }

  getUserAge(): Observable<User[]> {
    const userAgeUrl = `${this.apiURL}msr/ages`;
    return this.http.get<User[]>(userAgeUrl)
      .pipe(catchError(err => this.errorHandler(err)));
  }

  getUserName(): Observable<User[]> {
    const userNameUrl = `${this.apiURL}msr/names`;
    return this.http.get<User[]>(userNameUrl)
      .pipe(catchError(err => this.errorHandler(err)));
  }

}
