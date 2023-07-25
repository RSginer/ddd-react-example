import { Car } from '@Car/Domain';

export interface UpdateCarRepository {
  updateCar: (id: number, car: Car) => Promise<Car>;
}
