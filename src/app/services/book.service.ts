import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../model/user.type';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  http = inject(HttpClient);
  currentUser = signal<User | undefined | null>(undefined);

  getData() {
    const Headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.currentUser()?.token);
    return this.http.get("http://localhost:8000/api/biblio/", {headers: Headers})
  }
}
