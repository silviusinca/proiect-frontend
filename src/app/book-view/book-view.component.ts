import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book, FavBook } from '../types';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  selectedBook$: Observable<Book | null> | undefined;
  isLoggedIn: boolean = false;
  bookAdded: boolean = false;
  first_time: boolean = false;
  // private favouriteISBNCollection: AngularFirestoreCollection<string>

  constructor(private route: ActivatedRoute, private bookService: BookService, private authService: AuthService, private afs: AngularFirestore) { 
    // this.favouriteISBNCollection = afs.collection<string>('')
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const isbn = params['isbn13'];
      this.selectedBook$ = this.bookService.getBookByISBN(isbn);
    });
    this.authService.userState$.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  addToFavorites(isbn: string)  {
    const user = firebase.auth().currentUser;
    
    const favBookToAdd = { userId: user?.uid, isbn13: isbn } as FavBook;

    this.bookService.getFavourites().subscribe(favourites => {
      const exists = favourites?.some(favBook => favBook.isbn13 == isbn);
      if (exists) {
        this.bookAdded = true;
      }
      else {
        this.afs.collection("favourites").add(favBookToAdd);
      }
    })
  }
}
