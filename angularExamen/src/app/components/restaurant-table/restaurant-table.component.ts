import {Component, Input, OnInit} from '@angular/core';
import {RestaurantInterface} from "../../models/restaurant-interface";
import {EvaluationInterface} from "../../models/evaluation-interface";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  @Input() restaurants: RestaurantInterface[] = [];

  @Input() evaluations: EvaluationInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
