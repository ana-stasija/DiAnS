import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooksByUniversities().subscribe(
      (data) => this.books = data
    );
  }


}
