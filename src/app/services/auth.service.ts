import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails, LoginUser } from "../types";
import Constants from '../types';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  login(loginUser: LoginUser) {    
    return this.afAuth.signInWithEmailAndPassword(loginUser.email, loginUser.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch ((error) => {
      console.error("Login error: ", error);
    })
  }

  register(userDetails: UserDetails) {
    return this.afAuth.createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error("Registration error: ", error);
      });
  }

  isLoggedIn(): boolean {
    return this.afAuth.currentUser !== null;
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
      this.router.navigate(['/']);
    });
  }

}
