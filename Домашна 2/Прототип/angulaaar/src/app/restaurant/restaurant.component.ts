import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooksByRestaurant().subscribe(
      (data) => this.books = data
    );
  }


}
