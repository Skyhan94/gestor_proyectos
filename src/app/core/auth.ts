import { Injectable } from '@angular/core';
//Servicio para autenticar (Iniciar o cerrar sesion)
@Injectable({
  providedIn: 'root'
})
export class Auth {

  static login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  static getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  static logout() {
    localStorage.removeItem('user');
  }
  static isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
