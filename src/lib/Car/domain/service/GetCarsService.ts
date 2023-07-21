import { GetCarsRepository } from "../repository/GetCarsRepository";

export class GetCarsService {
    constructor(
      public carsGetter: GetCarsRepository
    ){}
}