
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginDataService } from './login-data.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {

  constructor(public auth: LoginDataService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.loginData) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}