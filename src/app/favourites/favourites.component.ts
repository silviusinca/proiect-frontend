import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../types';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) {} 

  ngOnInit(): void {
    this.favourites$ = this.bookService.getFavouriteBooks();
    console.log(this.favourites$)
  }

}
