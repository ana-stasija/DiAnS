import { Component, OnInit } from '@angular/core';
import { Place } from '../model/Place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-books',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  books: Place[];

  constructor(private booksService: PlacesService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(
      (data) => this.books = data

    );
    // this.books.forEach(async(books)=>{
    //
    // })
  }


}
