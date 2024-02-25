import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails, LoginUser } from "../types";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  userState$: Observable<any>;

  constructor(private router: Router, public afAuth: AngularFireAuth) { 
    this.userState$ = this.afAuth.authState;
  }

  async login(loginUser: LoginUser) {    
    await this.afAuth.signInWithEmailAndPassword(loginUser.email, loginUser.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch ((error) => {
      console.error("Login error: ", error);
    })
  }

  async register(userDetails: UserDetails) {
    await this.afAuth.createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error("Registration error: ", error);
      });
  }

  async logout() {
    await this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
      this.router.navigate(['/']);
    });
  }

  isLoggedIn() {
    return this.afAuth.authState !== null;
  }

}
