import { Component } from '@angular/core';
import {icon} from "leaflet";
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="SkopjeMove";
  // // @ts-ignore
  // map;
  //
  // constructor(private ms: MapMarkerService) {
  //   console.log(this.ms.coords);
  //   this.ms.coordsChange.subscribe(coords => {
  //     console.log(coords);
  //     this.map.flyTo(coords, this.map.getZoom());
  //     // @ts-ignore
  //     L.marker(coords, { icon }).addTo(this.map);
  //   });
  // }
  //
  // ngOnInit() {
  //   this.map = L.map("map").setView([46.879966, -121.726909], 7);
  //
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(this.map);
  // }
}
