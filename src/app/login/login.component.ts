import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Constants, { LoginUser } from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
      // this.authService.login(user).subscribe(
      //   {
      //     next: (response: any) => {
      //       console.log('successful log in!', response);
      //       localStorage.setItem(Constants.USER_KEY, JSON.stringify(user));
      //       this.router.navigate(['/']);
      //     },
      //     error: (err: any) =>  {
      //       console.error('log in failed!', err);
      //       this.incorrectCredentials = true; 
      //     }
      //   }
      // );
      this.authService.login(user.email, user.password);

    } else {
      console.log('invalid form!');
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  } 
}
