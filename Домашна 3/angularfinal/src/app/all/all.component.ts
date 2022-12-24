import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place';
import { PlaceService } from '../services/place.service';
import { MapComponent } from '../map/map.component'
// import {MapMarkerService} from "../services/map-marker.service";
import * as L from 'leaflet';
import {LatLngExpression} from "leaflet";
import {MapMarkerService} from "../services/map-marker.service";


@Component({
  selector: 'app-place',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  // @ts-ignore
  place: Place[];
  private element: any;

  // public map: any;
  private centroid: L.LatLngExpression = [41.9981, 21.4254]; //


  constructor(private placeService: PlaceService,private mapata: MapComponent,private markerService: MapMarkerService) { }

  ngOnInit(): void {
    this.placeService.getAllBooks().subscribe(
      (data) => {
        this.place = data
        // @ts-ignore
        // for(let i=0;i<this.place.length;i++) {
        //
        //   // @ts-ignore
        //   if(this.place.at(i).amenity=="cafe")
        //
        //   this.markerService.makeMarkers(L.Map, this.place.at(i), this.centroid);
        // }
        // this.mapata.initMarkers(this.place.at(0).amenity)
        // for(let i=0;i<this.place.length;i++){
        //   // @ts-ignore
        //   if(this.place.at(i).amenity=="cafe"){
        //     console.log(this.place.at(i))
        //     this.mapata.initMarkers(this.place.at(i))
        //   }
        // }

        // console.log(this.place)
        // this.initMarkers()
      }

    );


    // this.initMarkers();
    // for (let i = 0; i < this.place.length; i++) {
    //   this.element = this.place.at(i)
    //   if(this.element.amenity == "cafe") {
    //     this.mapata.initMarkers(this.element);
    //   }
    // }
    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 18,
    //   minZoom: 10,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });
    // for (let i = 0; i < this.place.length; i++) {
    //   this.element=this.place.at(i)
    //   L.marker([this.element.coordinate_x,this.element.coordinate_y] as LatLngExpression)
    //   Array(1).fill(this.centroid).map(
    //     x => [this.element.coordinate_x,this.element.coordinate_y]
    //   ).map(
    //     x => L.marker(x as L.LatLngExpression)
    //   ).forEach(
    //     x => x.addTo(this.mapata.map)
    //   );
    // }
    // tiles.addTo(this.mapata.map);
    // console.log(this.place[1].coordinate_y)
    // this.books.forEach(async(books)=>{
    //
    // })
    // for (let i = 0; i < this.place.length; i++) {
    //   this.element=this.place.at(i)
    //   L.marker([this.element.coordinate_x,this.element.coordinate_y] as LatLngExpression)
    //   Array(1).fill(this.centroid).map(
    //     x => [this.element.coordinate_x,this.element.coordinate_y]
    //   ).map(
    //     x => L.marker(x as L.LatLngExpression)
    //   ).forEach(
    //     x => x.addTo(this.map)
    //   );
    // }
  }
  // private initMarkers(): void {
  //   this.element=this.place.at(0);
  //     Array(1).fill(this.centroid).map(
  //       x => [this.element.coordinate_x,this.element.coordinate_y]
  //     ).map(
  //       x => L.marker(x as L.LatLngExpression)
  //     ).forEach(
  //       x => x.addTo(this.mapata.map)
  //     );
  // this.map = L.map('map', {
  //   center: this.centroid,
  //   zoom: 12
  // });

  // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 18,
  //   minZoom: 10,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // });

  // create 5 random jitteries and add them to map
  // const jittery = Array(5).fill(this.centroid).map(
  //   x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
  // ).map(
  //   x => L.marker(x as L.LatLngExpression)
  // ).forEach(
  //   x => x.addTo(this.map)
  // );
  // for (let i = 0; i < this.place.length; i++) {
  //   this.element=this.place.at(i)
  //   L.marker([this.element.coordinate_x,this.element.coordinate_y] as LatLngExpression)
  //   Array(1).fill(this.centroid).map(
  //     x => [this.element.coordinate_x,this.element.coordinate_y]
  //   ).map(
  //     x => L.marker(x as L.LatLngExpression)
  //   ).forEach(
  //     x => x.addTo(this.map.map)
  //   );
  // }
  //
  // handleClick() {
  //   // for (const coords in this.place) {
  //   this.niza=this.place.at(2)
  //
  //   // }
  //    L.marker(this.niza.coordinate_x, this.niza.coordinate_y)
  //
  //    // this.mapMarker.change([51.5, -0.09]);
  // }

}
