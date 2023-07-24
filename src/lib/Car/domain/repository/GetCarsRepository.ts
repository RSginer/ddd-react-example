import { Car } from '@Car/Domain';

export interface GetCarsRepository {
  getCars: (searchQuery?: string, sort?: string) => Promise<Car[]>;
}
