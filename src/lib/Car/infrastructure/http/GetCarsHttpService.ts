import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsHttpService implements GetCarsRepository {
  constructor(private apiUrl: string) {}

  getCars = async (searchQuery?: string, sort?: string): Promise<Car[]> => {
    const url = new URL(`${this.apiUrl}/cars`);

    if (searchQuery) {
      url.searchParams.append('q', searchQuery);
    }

    if (sort) {
      url.searchParams.append('_sort', sort);
    }

    const response = await fetch(url);
    const cars = (await response.json()) as Car[];

    return cars;
  };
}
