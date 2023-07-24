import { Car } from '@Car/Domain';

export interface GetCarsRepository {
  getCars: (
    searchQuery?: string,
    sort?: {
      order: 'asc' | 'desc';
      property: string;
    },
  ) => Promise<Car[]>;
}
