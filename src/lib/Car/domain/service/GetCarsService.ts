import { GetCarsRepository } from "../repository/GetCarsRepository";

export class GetCarsService {
    constructor(
      private carsGetter: GetCarsRepository
    ){}

    getCars() {
      return this.carsGetter.getCars();
    }
}