import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as L from 'leaflet';
import 'leaflet-routing-machine';
import {RouteService} from "./services/routeService";
//import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import {Place} from "./model/Place";
//import {Route} from "./model/Route";
import {Marker} from "leaflet";

declare const L: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-demo';
  private start: string;
  private end: string;
  constructor(private http: HttpClient, private routeService:RouteService) {}
  map:L.Map;
  ngOnInit() {
    //41.9981° N, 21.4254° E
     this.map = L.map('map').setView([41.9981, 21.4254], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.http.get<Place[]>('/api/places').subscribe(places => {
      places.forEach(place => {
        this.addMarker(place.coordinate_x, place.coordinate_y, place.amenity, place.name);
      });
    });
    // In the Angular frontend, use the Leaflet Routing Machine plugin to display the route on the map:
    this.routeService.getRoute(this.start, this.end).subscribe(route => {
      L.Routing.control(
        {
          waypoints: [
            L.latLng(route.start.coordinate_x, route.start.coordinate_y),
            L.latLng(route.end.coordinate_x, route.end.coordinate_y)
          ],
          routeWhileDragging: true
        }).addTo(this.map);
    });

  }
  private addMarker(coordinate_x: number, coordinate_y: number, amenity: string, name: string) {
    let marker: Marker<any>;
    marker = L.marker([coordinate_x, coordinate_y]).addTo(this.map)
      .bindPopup(`<b>${amenity}</b><br>${name}`);
  }
}
  //In your Java Spring Maven backend, create a REST endpoint for calculating routes:
  //
  // @GetMapping("/route")
  // public Route getRoute(@RequestParam("start") String start, @RequestParam("end") String end) {
  //    // Calculate route using OpenStreetMap routing engine
  //   RoutingRequest request = new RoutingRequest();
  //   request.setStart(start);
  //   request.setEnd(end);
  //   RoutingResponse response = routingEngine.calculateRoute(request);
  //
  //   // Convert route details to Route object
  //   Route route = new Route();
  //   route.setStart(response.getStart());
  //   route.setEnd(response.getEnd());
  //   route.setDistance(response.getDistance());
  //   route.setDuration(response.getDuration());
  //
  //   return route;

  // }

//Here is an example of the Route class that could be used to store the route data in a PostgreSQL database:
//
//
// @Entity
// @Table(name = "routes")
// public class Route {
//   @Id
//   @GeneratedValue(strategy = GenerationType.IDENTITY)
//   private Long id;
//
//   @OneToOne
//   @JoinColumn(name = "start_id")
//   private Location start;
//
//   @OneToOne
//   @JoinColumn(name = "end_id")
//   private Location end;
//
//   private double distance;
//   private long duration;
//
//   // Getters and setters for properties
// }
//The Location class could be defined as follows:
//
// Copy code
// @Entity
// @Table(name = "locations")
// public class Location {
//   @Id
//   @GeneratedValue(strategy = GenerationType.IDENTITY)
//   private Long id;
//
//   @Column(name = "coordinate_x")
//   private double coordinateX;
//
//   @Column(name = "coordinate_y")
//   private double coordinateY;
//
//   private String amenity;
//   private String name;
//
//   // Getters and setters for properties
// }
//To persist the route data to the database, you can use the Spring JPA repository:
//
//
// @Repository
// public interface RouteRepository extends JpaRepository<Route, Long> {
// }
//In your service layer, you can use the repository to save the route data:
//
//
// @Service
// public class RouteService {
//   @Autowired
//   private RouteRepository routeRepository;
//
//   public void saveRoute(Route route) {
//     routeRepository.save(route);
//   }
// }
//To retrieve the route data from the database, you can use the repository to find the route by its ID:
//
//
// @Service
// public class RouteService {
//   @Autowired
//   private RouteRepository routeRepository;
//
//   public Optional<Route> findRouteById(Long id) {
//     return routeRepository.findById(id);
//   }
// }

