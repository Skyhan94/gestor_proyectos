import { Injectable } from '@angular/core';

// Servicio para autenticar (Iniciar o cerrar sesión)
@Injectable({
  providedIn: 'root'
})
export class Auth {
  private static USER_KEY = 'user';

  static login(user: any) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static getUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  static logout() {
    localStorage.removeItem(this.USER_KEY);
  }

  static isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

