import { Component, OnInit } from '@angular/core';
import { Place } from '../model/Place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-books',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  books: Place[];

  constructor(private booksService: PlacesService) { }

  ngOnInit(): void {
    this.booksService.getBooksByHospital().subscribe(
      (data) => this.books = data
    );
  }


}
