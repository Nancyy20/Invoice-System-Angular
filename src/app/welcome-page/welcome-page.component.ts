import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  constructor(private router: Router) {}

  openLoginUser() {
    this.router.navigate(['/login']);
  }
  openLoginSP() {
    this.router.navigate(['/sp-login']);
  }
  openLoginAdmin() {
    this.router.navigate(['/login']);
  }
}
