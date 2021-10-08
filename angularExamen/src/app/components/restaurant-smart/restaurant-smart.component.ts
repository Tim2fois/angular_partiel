import { Component, OnInit } from '@angular/core';
import {RestaurantInterface} from "../../models/restaurant-interface";
import {RestaurantServiceService} from "../../services/restaurant-service.service";

@Component({
  selector: 'app-restaurant-smart',
  templateUrl: './restaurant-smart.component.html',
  styleUrls: ['./restaurant-smart.component.css']
})
export class RestaurantSmartComponent implements OnInit {
  public restaurants: RestaurantInterface[] = [];

  constructor(private restaurantService: RestaurantServiceService) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  private loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(value => this.restaurants = value);
  }

  public restaurantAdded(restaurant: RestaurantInterface): void {
    this.restaurantService.addRestaurants(restaurant);
  }

}
