import { Car } from '@Car/Domain';

export interface GetCarsRepository {
  getCars: (searchQuery?: string) => Promise<Car[]>;
}
