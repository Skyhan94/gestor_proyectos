import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: false
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    Auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
