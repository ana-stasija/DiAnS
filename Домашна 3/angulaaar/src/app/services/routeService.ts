import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Route} from "../model/Route";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  getRoute(start: string, end: string): Observable<Route> {
    return this.http.get<Route>(`/api/route?start=${start}&end=${end}`);
  }


}
