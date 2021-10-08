import {EvaluationInterface} from "./evaluation-interface";

export interface RestaurantInterface {
  "id": number,
  "nom": String,
  "adresse": String,
  "evaluations": EvaluationInterface[]
}
