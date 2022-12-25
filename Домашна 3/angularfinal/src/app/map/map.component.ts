import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {PlaceService} from "../services/place.service";
import {Place} from "../model/place";
import {LatLngExpression, marker} from "leaflet";
import {MapMarkerService} from "../services/map-marker.service";
import 'leaflet-routing-machine';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  userIcon = L.icon({
    iconUrl: '../assets/userLocation.png',
    shadowUrl: '../assets/userLocation.png',

    iconSize:     [30, 45], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [22, 45], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  public map: any;
  private lat: any;
  private long: any;
  private element: any;
  public centroid: L.LatLngExpression = [41.9981, 21.4254]; //
  private layerGroup: any;
  // @ts-ignore
  private place: Place[];
  initMap(): void {
    console.log(this.place);
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

// Define the base layers
    const streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      minZoom: 10,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    const terrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      minZoom: 10,
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });

// Add the base layers to the map
    streets.addTo(this.map);

// Add a layer control to switch between different map layers
    L.control.layers({
      "Streets": streets,
      "Satellite": satellite,
      "Terrain": terrain
    }).addTo(this.map);
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
    //   // L.marker([this.element.coordinate_x,this.element.coordinate_y] as LatLngExpression)
    //   Array(1).fill(this.centroid).map(
    //     x => [this.element.coordinate_x,this.element.coordinate_y]
    //   ).map(
    //     x => L.marker(x as L.LatLngExpression)
    //   ).forEach(
    //     x => x.addTo(this.map)
    //   );
    // }
     L.marker([this.lat,this.long] as LatLngExpression, {icon: this.userIcon}).addTo(this.map);
    //first line routing
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl:'http://router.project-osrm.org/route/v1'
      }),
      showAlternatives: true,
      lineOptions:{
        styles:[{color:'#242c81',weight:7}],extendToWaypoints:true,missingRouteTolerance:1000},
      fitSelectedRoutes: false,
      altLineOptions: {styles: [{color: '#ed6852', weight: 7}],extendToWaypoints:true,missingRouteTolerance:1000},
      show: false,
      routeWhileDragging: false,
      waypoints: [
        L.latLng(this.lat, this.long),
        L.latLng(42.008232, 21.459574)
      ],
    }).addTo(this.map);

//last line of routing
  }

  constructor(private placeService: PlaceService, private markerService: MapMarkerService) {

  }


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat=position.coords.latitude;
      this.long=position.coords.longitude;
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
    });
    this.placeService.getAllBooks().subscribe(
      (data) => {
        this.place = data
        // console.log(data);
        this.initMap();
        // for(let i=0;i<this.place.length;i++) {
        //   this.markerService.makeMarkers(this.map, this.place.at(i), this.centroid);
        // }
        // this.markerService.makeMarkers(this.map,this.place.at(0),this.centroid)
        // this.markerService.makeMarkers(this.map,this.place.at(1),this.centroid)
        // this.markerService.makeMarkers(this.map,this.place.at(2),this.centroid)
      }
    );
  }
  showMarkers(amenity: string): void{
    this.layerGroup.clearLayers();

    for(let i=0;i<this.place.length;i++) {


      // @ts-ignore
      if(this.place.at(i).amenity==amenity) {
        this.markerService.makeMarkers(this.map, this.place.at(i), this.centroid,this.layerGroup);
      }
    }
  }
  // initMarkers(amenity:string): void{
  //     for(let i=0;i<this.place.length;i++){
  //       // @ts-ignore
  //       if(this.place.at(i).amenity==amenity||amenity=="") {
  //         this.markerService.makeMarkers(this.map, this.place.at(i), this.centroid);
  //       }
  //     }

}

