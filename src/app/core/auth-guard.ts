import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (Auth.isLoggedIn()) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth/login']);
    }
  }
}
