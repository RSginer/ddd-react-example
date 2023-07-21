import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsService {
  constructor(private carsGetter: GetCarsRepository) {}

  getCars(): Promise<Car[]> {
    return this.carsGetter.getCars();
  }
}
