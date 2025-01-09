import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.type';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  authService = inject(AuthService);
  bookService = inject(BookService);
  router = inject(Router);
  user : User = {
    name: '',
    password: '',
    token: ''
  };

  authorizeUser() {
    this.authService.authorize(this.user).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe(tokenReply => {
      this.user.token = tokenReply.token;
      this.bookService.currentUser.set(this.user);
      localStorage.setItem('token', this.user.token);
      this.router.navigateByUrl('/showcase');
    });

  }
}
