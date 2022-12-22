import { Component, OnInit } from '@angular/core';
import { Place } from '../model/Place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-books',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  books: Place[];

  constructor(private booksService: PlacesService) { }

  ngOnInit(): void {
    this.booksService.getBooksByUniversities().subscribe(
      (data) => this.books = data
    );
  }


}
