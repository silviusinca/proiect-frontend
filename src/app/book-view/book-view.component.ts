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

  constructor(private route: ActivatedRoute, private bookService: BookService) { 
    this.route.params.subscribe(params => {
      const isbn = params['isbn13'];
      this.selectedBook = this.getBookDetailsByTitle(isbn);
    });
  }

  ngOnInit(): void {
  }

  async getBookDetailsByTitle(id: string) {
    const book = await this.bookService.getBookById(id);
    return book;
  }
}
