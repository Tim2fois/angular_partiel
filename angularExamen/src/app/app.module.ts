import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantSmartComponent } from './components/restaurant-smart/restaurant-smart.component';
import {RestaurantServiceService} from "./services/restaurant-service.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TableDirectiveDirective } from './directives/table-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    RestaurantSmartComponent,
    TableDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
