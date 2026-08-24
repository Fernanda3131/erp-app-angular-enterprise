import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/auth.model';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = `${environment.apiUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      email,
      password,
    });
  }
  saveSession(response: LoginResponse) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  hasPermission(permission: string): boolean {
    const user = this.getUser();

    if (!user) {
      return false;
    }

    return user.permissions.includes(permission);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
