import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Place } from '../model/place';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private baseUrl = environment.apiUrl + "api/books";
  constructor(
    private http: HttpClient,
  ) {}

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  getBooksByHospital(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hospital`);
  }
  getBooksByCafe(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cafe`);
  }
  getBooksByRestaurant(): Observable<any> {
    return this.http.get(`${this.baseUrl}/restaurant`);
  }
  getBooksByPark(): Observable<any> {
    return this.http.get(`${this.baseUrl}/park`);
  }
  getBooksByMall(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mall`);
  }
  getBooksBySuperMarkets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/supermarket`);
  }
  getBooksByUniversities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/university`);
  }
}
