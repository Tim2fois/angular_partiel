import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantSmartComponent} from "./components/restaurant-smart/restaurant-smart.component";

const routes: Routes = [
  {path: "", component: RestaurantSmartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
