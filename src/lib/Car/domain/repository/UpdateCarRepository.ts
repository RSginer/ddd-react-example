import { Car } from '@Car/Domain';

export interface UpdateCarRepository {
  updateCar: (car: Car) => Promise<Car>;
}
