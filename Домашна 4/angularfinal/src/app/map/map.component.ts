import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {PlaceService} from "../services/place.service";
import {Place} from "../model/place";
import {LatLngExpression} from "leaflet";
import {MapMarkerService} from "../services/map-marker.service";
import 'leaflet-routing-machine';
import 'leaflet.fullscreen';


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
  private selectedPlace: any;
  private routingControl: any;
  private element: any;
  public centroid: L.LatLngExpression = [41.9981, 21.4254]; //
  private layerGroup: any;
  // @ts-ignore
  private place: Place[];
  initMap(): void {
    console.log(this.place);

    this.map = L.map('map', {
      center: this.centroid,
      zoom: 11,
      //@ts-ignore
      fullscreenControl: {
        position: 'topleft',
        title: 'Toggle Fullscreen',
        titleCancel: 'Exit Fullscreen'

      }
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
    this.layerGroup = L.layerGroup().addTo(this.map);





     this.element=L.marker([this.lat,this.long] as LatLngExpression, {icon: this.userIcon}).addTo(this.map);

  }

  constructor(private placeService: PlaceService, private markerService: MapMarkerService) {

  }


  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position) => {
      this.lat=position.coords.latitude;
      this.long=position.coords.longitude;

    });
    this.placeService.getAllPlaces().subscribe(
      (data) => {
        this.place = data

        this.initMap();

        this.showMarkers("all");
      }
    );
  }
  showMarkersBySearch(search: any) : void {
    this.layerGroup.clearLayers();
    if (this.routingControl != null) {
      this.map.removeControl(this.routingControl);
    }
    for (let i = 0; i < this.place.length; i++) {
      // @ts-ignore
      if (this.place.at(i).name.toUpperCase() == search.toUpperCase() || this.place.at(i).name.toUpperCase().includes(search.toUpperCase()))  {

        // @ts-ignore
        const marker = L.marker([this.place.at(i).coordinate_x, this.place.at(i).coordinate_y]).addTo(this.map);

        this.layerGroup.addLayer(marker);
        // @ts-ignore

        if (this.routingControl != null) {
          this.map.removeControl(this.routingControl);
        }
        // @ts-ignore

        //@ts-ignore
        this.layerGroup.addLayer(marker.bindPopup(`Име: ${this.place.at(i).name}<br>Објект: ${this.place.at(i).amenity}`).addTo(this.map).openPopup());


        // @ts-ignore
        //marker onclick dava route na mestoto
        marker.on('click', () => {

          if(this.routingControl!=null){
            this.map.removeControl(this.routingControl);
          }

          // @ts-ignore
          this.layerGroup.addLayer(marker.bindPopup(`Име: ${this.place.at(i).name}<br>Објект: ${this.place.at(i).amenity}`).addTo(this.map).openPopup());
          this.routingControl = L.Routing.control({
            router: L.Routing.osrmv1({
              serviceUrl:'http://router.project-osrm.org/route/v1'
            }),
            showAlternatives: true,
            lineOptions:{
              styles:[{color:'#242c81',weight:7}],extendToWaypoints:true,missingRouteTolerance:1000},
            fitSelectedRoutes: true,
            altLineOptions: {styles: [{color: '#ed6852', weight: 7}],extendToWaypoints:true,missingRouteTolerance:1000},
            show: true,
            routeWhileDragging: false,
            waypoints: [
              this.element.getLatLng(),
              marker.getLatLng()
            ],

          }).addTo(this.map);

        });
        this.map.setView(this.centroid,12);

      }
    }
  }
  showMarkers(amenity: any): void{
    this.selectedPlace= amenity;
    console.log(this.selectedPlace);
    this.layerGroup.clearLayers();
    if(this.routingControl!=null){
      this.map.removeControl(this.routingControl);
    }
    for(let i=0;i<this.place.length;i++) {
      // @ts-ignore
      if(this.place.at(i).amenity==amenity||amenity=="all") {

        // @ts-ignore
        const marker = L.marker([this.place.at(i).coordinate_x, this.place.at(i).coordinate_y]).addTo(this.map);

        this.layerGroup.addLayer(marker);
        // @ts-ignore

        //marker onclick dava route na mestoto
        marker.on('click', () => {

          this.layerGroup.clearLayers();
          // marker.openPopup()
          if(this.routingControl!=null){
            this.map.removeControl(this.routingControl);
          }


          // @ts-ignore
          this.layerGroup.addLayer(L.marker(marker.getLatLng()).bindPopup(`Име: ${this.place.at(i).name}<br>Објект: ${this.place.at(i).amenity}`).addTo(this.map).openPopup());
          this.routingControl = L.Routing.control({
             router: L.Routing.osrmv1({
               serviceUrl:'http://router.project-osrm.org/route/v1'
             }),
             showAlternatives: true,
             lineOptions:{
               styles:[{color:'#242c81',weight:7}],extendToWaypoints:true,missingRouteTolerance:1000},
             fitSelectedRoutes: true,
             altLineOptions: {styles: [{color: '#ed6852', weight: 7}],extendToWaypoints:true,missingRouteTolerance:1000},
             show: true,
             routeWhileDragging: false,
             waypoints: [
               this.element.getLatLng(),
               marker.getLatLng()
             ],

           }).addTo(this.map);

          // @ts-ignore

        });
        this.map.setView(this.centroid,12);
      }
    }
  }

}

