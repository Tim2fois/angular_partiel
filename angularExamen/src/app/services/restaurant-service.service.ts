import { Injectable } from '@angular/core';
import {RestaurantInterface} from "../models/restaurant-interface";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  private restaurants: BehaviorSubject<RestaurantInterface[]> = new BehaviorSubject<RestaurantInterface[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadRestaurants();
  }

  public getRestaurants(): Observable<RestaurantInterface[]> {
    return this.restaurants;
  }

  private loadRestaurants(): void {
    this.httpClient.get<RestaurantInterface[]>("http://localhost:3000/restaurants").subscribe(value => this.restaurants.next(value));
  }

  public addRestaurants(restaurant: RestaurantInterface): void {
    this.httpClient.post("http://localhost:3000/restaurants", restaurant).subscribe(value => this.restaurants.next([...this.restaurants.getValue(), restaurant]));
  }

}
