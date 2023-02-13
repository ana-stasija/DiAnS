import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place';
import { PlaceService } from '../services/place.service';
import { MapComponent } from '../map/map.component'


import {MapMarkerService} from "../services/map-marker.service";


@Component({
  selector: 'app-place',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  // @ts-ignore
  place: Place[];
  constructor(private placeService: PlaceService,private mapata: MapComponent,private markerService: MapMarkerService) { }

  ngOnInit(): void {
    this.placeService.getAllPlaces().subscribe(
      (data) => {
        this.place = data
      }
    );
  }
}
