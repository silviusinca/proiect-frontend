import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails, LoginUser } from "./types";
import Constants from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  private apiUrl = 'http://your-api-url'; 
  private readonly userKey = Constants.USER_KEY;

  constructor(private http: HttpClient) { }

  login(loginUser: LoginUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginUser);
  }

  register(userDetails: UserDetails): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { userDetails });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  getUser(): LoginUser | null {
    const userString = localStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }

}
