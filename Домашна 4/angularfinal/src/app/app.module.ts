import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AllComponent } from './all/all.component';
import { HttpClientModule } from "@angular/common/http";
import {MapMarkerService} from "./services/map-marker.service";


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AllComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MapComponent,MapMarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
