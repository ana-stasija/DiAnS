import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(
      (data) => this.books = data

    );
    // this.books.forEach(async(books)=>{
    //
    // })
  }


}
