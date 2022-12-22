import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from "./all/all.component";
import { HomeComponent } from './home/home.component';
import {HospitalComponent} from "./hospital/hospital.component";
import {CafeComponent} from "./cafe/cafe.component";
import {ParkComponent} from "./park/park.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {SupermarketComponent} from "./supermarkets/supermarket.component";
import {MallComponent} from "./mall/mall.component";
import {UniversityComponent} from "./university/university.component";

const routes: Routes = [
  {
    path: 'books',
    component: AllComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hospital',
    component: HospitalComponent
  },
  {
    path: 'cafe',
    component: CafeComponent
  },
  {
    path: 'park',
    component: ParkComponent
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'supermarket',
    component: SupermarketComponent
  },

  {
    path: 'mall',
    component: MallComponent
  },

  {
    path: 'university',
    component: UniversityComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
