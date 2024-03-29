import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  books$: Observable<Book[]> | undefined;

  constructor(private router: Router, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

  showBookDetails(book: Book) {
    this.router.navigate(['/book', book.isbn13]);
  }
}
