import { Injectable } from '@angular/core';
import * as L from 'leaflet'
import {Place} from "../model/place";
import {LatLngExpression} from "leaflet";


@Injectable({
  providedIn: 'root'
})
export class MapMarkerService {

  constructor() { }
  makeMarkers(map: any, elements: any, centroid : any, layerGroup: any): void{



    Array(1).fill(centroid).map(
      x => [elements.coordinate_x,elements.coordinate_y]
    ).map(
      x => L.marker(x as L.LatLngExpression)
    ).forEach(
      x => console.log(x.addTo(layerGroup))
    );

  }
}
