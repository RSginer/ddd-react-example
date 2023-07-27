import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarHttpService implements UpdateCarRepository {
  constructor(private apiUrl: string) {}

  updateCar = async (id: number, car: Car) => {
    const response = await fetch(`${this.apiUrl}/cars/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ ...car }),
    });
    const updatedCar = (await response.json()) as Car;

    return updatedCar;
  };
}
