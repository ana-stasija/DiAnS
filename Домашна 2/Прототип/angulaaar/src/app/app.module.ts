import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { HttpHeaders, HttpClient, HttpClientModule } from "@angular/common/http";
import {HospitalComponent} from "./hospital/hospital.component";
import {CafeComponent} from "./cafe/cafe.component";
import {ParkComponent} from "./park/park.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {SupermarketComponent} from "./supermarkets/supermarket.component";
import {MallComponent} from "./mall/mall.component";
import {UniversityComponent} from "./university/university.component";



@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    HomeComponent,
    HospitalComponent,
    CafeComponent,
    ParkComponent,
    RestaurantComponent,
    SupermarketComponent,
    MallComponent,
    UniversityComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
