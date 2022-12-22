import { Component, OnInit } from '@angular/core';
import { Place } from '../model/Place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-books',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  books: Place[];

  constructor(private booksService: PlacesService) { }

  ngOnInit(): void {
    this.booksService.getBooksByPark().subscribe(
      (data) => this.books = data
    );
  }


}
