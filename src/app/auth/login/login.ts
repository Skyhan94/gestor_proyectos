import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      Auth.login({ username: this.username, password: this.password });
      console.log('Usuario logueado: ', Auth.getUser());

      this.router.navigate(['/projects/list']);
    } else {
      alert('Ingrese usuario y contraseña');
    }
  }

  onLogout() {
    Auth.logout();
    alert('Sesión cerrada');
  }

  isLoggedIn(): boolean {
    return Auth.isLoggedIn();
  }
}

