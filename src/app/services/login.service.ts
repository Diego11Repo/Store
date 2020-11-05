import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginUserInterface } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<LoginUserInterface>('http://localhost:3000/user');
  }
}
