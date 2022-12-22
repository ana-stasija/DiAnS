import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import {Place} from "./model/Place";
import {Marker} from "leaflet";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-demo';
  constructor(private http: HttpClient) {}
  map:L.Map;
  ngOnInit() {
     this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.http.get<Place[]>('/api/places').subscribe(places => {
      places.forEach(place => {
        this.addMarker(place.coordinate_x, place.coordinate_y, place.amenity, place.name);
      });
    });
  }

  private addMarker(coordinate_x: number, coordinate_y: number, amenity: string, name: string) {
    let marker: Marker<any>;
    marker = L.marker([coordinate_x, coordinate_y]).addTo(this.map)
      .bindPopup(`<b>${amenity}</b><br>${name}`);
  }
}

