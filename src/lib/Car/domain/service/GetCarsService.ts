import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsService {
  constructor(private carsGetter: GetCarsRepository) {}

  getCars(
    searchQuery?: string,
    sort?: {
      order: 'asc' | 'desc';
      property: keyof Car;
    },
  ): Promise<Car[]> {
    return this.carsGetter.getCars(searchQuery, sort);
  }

  getCarById(id: number): Promise<Car> {
    return this.carsGetter.getCarById(id);
  }
}
