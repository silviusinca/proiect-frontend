import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'proiect-frontend';

  // constructor(private bookService: BookService) {
  //   this.bookService.loadBooks();
  // }
}
