import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails, LoginUser } from "../types";
import Constants from '../types';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  private apiUrl = 'http://your-api-url'; 
  private readonly userKey = Constants.USER_KEY;

  constructor(public firestore: Firestore) { }

  // login(loginUser: LoginUser): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/login`, loginUser);
  // }

  // register(userDetails: UserDetails): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/register`, { userDetails });
  // }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  getUser(): LoginUser | null {
    const userString = localStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }

  async login(email: string, password: string) {
    const docRef = await addDoc(collection(this.firestore, 'test_users'), {
      email: email,
      password: password
    });
    console.log("Document written with ID: ", docRef.id);
  }
  

}
