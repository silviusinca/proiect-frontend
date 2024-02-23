import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../types';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: any;

  constructor(private router: Router, private bookService: BookService) {
    this.getBooks();
  }

  showBookDetails(book: any) {
    book = book as Book;
    console.log(book);
    console.log(book.isbn13);
    this.router.navigate(['/book', book.isbn13]);
  }

  async getBooks() {
    this.books = await this.bookService.getBooks();
  }
}
