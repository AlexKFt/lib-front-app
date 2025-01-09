import { Component, inject, input, OnInit, signal } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{ 
  bookService = inject(BookService);
  bookArray: Book[] = []
  book : Book | undefined;

  ngOnInit(): void {
    this.bookService.getData().subscribe({next:(data:any) => this.bookArray = data.data});
  }

  onSubmit(form: NgForm){
    console.log(form);
    console.log(this.book);
    this.bookArray.push(new Book(
      form.controls['book'].value,
      form.controls['author'].value,
      form.controls['bookpoint'].value,
      form.controls['datetake'].value,
      form.controls['datereturn'].value,
    ));
    form.reset();
  }

  onDelete(index: number){
    console.log(index)
    this.bookArray.splice(index, 1);
  }
}
