import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RestaurantInterface} from "../../models/restaurant-interface";
import {EvaluationInterface} from "../../models/evaluation-interface";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() restaurantAdded = new EventEmitter<RestaurantInterface>();

  public restaurant: RestaurantInterface = {
    id: 0,
    nom: "",
    adresse: "",
    evaluations: []
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.form && this.form.valid) {
      this.restaurantAdded.emit(this.restaurant);
      this.restaurant = {
        id: 0,
        nom: "",
        adresse: "",
        evaluations: []
      }
    }
  }

}
