import { GetCarsRepository } from '@Car/Domain';

export class GetCarsService {
    constructor(
      private carsGetter: GetCarsRepository
    ){}

    getCars() {
      return this.carsGetter.getCars();
    }
}