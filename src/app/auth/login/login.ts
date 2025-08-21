import { Component } from '@angular/core';
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

  onLogin(){
    if(this.username && this.password){
      Auth.login({ username: this.username, password: this.password});

      alert (`Bienvenido, ${this.username}`);
      console.log("Usuario logueado: ", Auth.getUser());
    } else {
      alert ('Ingrese usuario y contraseña');
    }
  }

  onLogout(){
    Auth.logout();
    alert('Sesion cerrada');
  }

  isLoggedIn(): boolean {
    return Auth.isLoggedIn();
  }
}
