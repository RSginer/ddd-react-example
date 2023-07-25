import { Car } from '@Car/Domain';

export interface GetCarsRepository {
  getCars: (
    searchQuery?: string,
    sort?: {
      order: 'asc' | 'desc';
      property: keyof Car;
    },
  ) => Promise<Car[]>;

  getCarById: (id: string) => Promise<Car>;
}
