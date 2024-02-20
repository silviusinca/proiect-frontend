import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = [
    { title: 'Book 1', authors: 'Author 1', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 4, summary: 'Summary of Book 1' },
    { title: 'Book 2', authors: 'Author 2', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 3.5, summary: 'Summary of Book 2' },
    { title: 'Book 3', authors: 'Author 3', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 5, summary: 'Summary of Book 3' },
    { title: 'Book 4', authors: 'Author 3', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 5, summary: 'Summary of Book 3' },
    { title: 'Book 5', authors: 'Author 4', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 5, summary: 'Summary of Book 3' },
    { title: 'Book 6', authors: 'Author 3', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 5, summary: 'Summary of Book 3' },
    { title: 'Book 7', authors: 'Author 4', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589743568i/17883464.jpg', rating: 5, summary: 'Summary of Book 3' },
];

  constructor(private router: Router) {}

  showBookDetails(book: any) {
    this.router.navigate(['/book', book.title]);
  }
}
