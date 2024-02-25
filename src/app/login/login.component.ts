import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from '../types';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup;
  incorrectCredentials: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user: LoginUser = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };
      try {
        this.authService.login(user);
      } catch (error) {
        console.log("login failed!", error);
        this.incorrectCredentials = true;
      }
    } else {
      console.log('invalid form!');
      this.incorrectCredentials = true;
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  } 
}
