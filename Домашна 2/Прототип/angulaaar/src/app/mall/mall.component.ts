import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.css']
})
export class MallComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooksByMall().subscribe(
      (data) => this.books = data
    );
  }


}
