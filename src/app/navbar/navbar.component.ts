import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private authService: AuthService) {}
  
  isLoggedIn(): boolean {
    console.log("verificare");
    return this.authService.isLoggedIn();
  } 

  logout() {
    this.authService.logout();
    console.log(this.isLoggedIn());
  }
}
