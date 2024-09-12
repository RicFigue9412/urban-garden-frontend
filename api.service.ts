import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Huertos
  getGardens(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gardens`);
  }

  createGarden(garden: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/gardens`, garden);
  }

  // Notificaciones
  getNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notifications`);
  }

  createNotification(notification: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications`, notification);
  }
}
