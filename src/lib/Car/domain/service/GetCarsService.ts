import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsService {
  constructor(private carsGetter: GetCarsRepository) {}

  getCars(
    searchQuery?: string,
    sort?: {
      order: 'asc' | 'desc';
      property: string;
    },
  ): Promise<Car[]> {
    return this.carsGetter.getCars(searchQuery, sort);
  }
}
