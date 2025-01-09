import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user.type';
import { TokenReply } from '../model/token-reply.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  createUser(user: User) {
    const url = `http://localhost:8000/auth/sign-up`;
    const body = {name: user.name, password: user.password};
    return this.http.post(url, body);
  }
  authorize(user: User) {
    const url = `http://localhost:8000/auth/sign-in`;
    const body = {name: user.name, password: user.password};
    return this.http.post<TokenReply>(url, body);
  }
}
