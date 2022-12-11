import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css']
})
export class SupermarketComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooksBySuperMarkets().subscribe(
      (data) => this.books = data
    );
  }


}
