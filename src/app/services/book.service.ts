import { Injectable } from '@angular/core';
import { Book, FavBook } from '../types';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private firestore: AngularFirestore) { }

  getBooks() {
    return this.firestore.collection("books").snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Book;
          return { ...data };
        });
      })
    );
  }

  getBookByISBN(isbn: string): Observable<Book | null> {
    return this.firestore.collection("books", ref => ref.where('isbn13', '==', isbn))
    .snapshotChanges().pipe(
      map(actions => {
        const book = actions.map(a => {
          const data = a.payload.doc.data() as Book;
          return { ...data };
        });
        return book.length ? book[0] : null;
      })
    );
  }

  getFavourites(): Observable<FavBook[] | null>{
    const user = firebase.auth().currentUser;
    if (user) {
      return this.firestore.collection<FavBook>("favourites", ref => ref.where('userId', '==', user.uid)).valueChanges();
    } else {
      return new Observable<FavBook[]>(observer => {
        observer.error(new Error('User is not authenticated'));
      });
    }
  }

  getFavouriteBooks(): Observable<Book[]> {
    const user = firebase.auth().currentUser;
  
    if (user) {
      return this.firestore.collection<FavBook>("favourites", ref => ref.where('userId', '==', user.uid))
        .valueChanges()
        .pipe(
          switchMap(favourites => {
            const favouriteIsbns = favourites.map(fav => fav.isbn13);
            return this.firestore.collection("books", ref => ref.where('isbn13', 'in', favouriteIsbns))
              .snapshotChanges()
              .pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Book;
                  return { ...data };
                }))
              );
          })
        );
    } else {
      return new Observable<Book[]>(observer => {
        observer.error(new Error('User is not authenticated'));
      });
    }
  }
  
  



}

