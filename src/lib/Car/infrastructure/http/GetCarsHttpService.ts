import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsHttpService implements GetCarsRepository {
  constructor(private apiUrl: string) {}

  getCars = async (searchQuery?: string): Promise<Car[]> => {
    const response = await fetch(`${this.apiUrl}/cars${searchQuery ? '?q=' + searchQuery : ''}`);
    const cars = (await response.json()) as Car[];

    return cars;
  };
}
