import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsHttpService implements GetCarsRepository {
  constructor(private apiUrl: string) {}

  getCarById = async (id: number) => {
    const url = new URL(`${this.apiUrl}/cars/${id}`);
    const response = await fetch(url);
    const car = (await response.json()) as Car;

    return car;
  };

  getCars = async (
    searchQuery?: string,
    sort?: {
      order: 'asc' | 'desc';
      property: keyof Car;
    },
  ): Promise<Car[]> => {
    const url = new URL(`${this.apiUrl}/cars`);

    if (searchQuery) {
      url.searchParams.append('q', searchQuery);
    }

    if (sort) {
      url.searchParams.append('_sort', sort.property);
      url.searchParams.append('_order', sort.order);
    }

    const response = await fetch(url);
    const cars = (await response.json()) as Car[];

    return cars;
  };
}
