import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Constants, {UserDetails, LoginUser} from "../types";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.fb.group({
      username: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    }, { validators: this.confirmPasswordValidator });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userDetails: UserDetails = {
        username: this.registrationForm.get('username')?.value,
        email: this.registrationForm.get('email')?.value,
        password: this.registrationForm.get('password')?.value,
      };
      // this.authService.register(userDetails).subscribe(
      //   {
      //     next: response => {
      //       console.log('account created successfully!', response);
      //       const loginUser: LoginUser = {
      //         email: userDetails.email, 
      //         password: userDetails.password
      //       };
            
      //       this.authService.login(loginUser).subscribe(
      //         {
      //           next: response => {
      //             console.log('successful log in!', response);
      //             localStorage.setItem(Constants.USER_KEY, JSON.stringify(loginUser));
      //             this.router.navigate(['/']);
      //           },
      //           error: err =>  {
      //             console.error('log in failed!', err);
      //           }
      //         }
      //       );
      //     },
      //     error: err => console.error('registration failed!', err)
      //   },
      // );
    }
    else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  private confirmPasswordValidator: ValidatorFn = ( control: AbstractControl): ValidationErrors | null => {
    return control.value.password === control.value.confirmPassword ? null : { passwordMismatch: true };
  };
}
