import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../types';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  selectedBook: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const isbn = params['isbn13'];
      this.selectedBook = await this.getBookDetailsByISBN(isbn);
    });
  }

  async getBookDetailsByISBN(isbn: string) {
    const book = await this.bookService.getBookById(isbn);
    return book;
  }
}
