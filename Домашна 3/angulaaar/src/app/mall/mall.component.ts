import { Component, OnInit } from '@angular/core';
import { Place } from '../model/Place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-books',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.css']
})
export class MallComponent implements OnInit {

  books: Place[];

  constructor(private booksService: PlacesService) { }

  ngOnInit(): void {
    this.booksService.getBooksByMall().subscribe(
      (data) => this.books = data
    );
  }


}
