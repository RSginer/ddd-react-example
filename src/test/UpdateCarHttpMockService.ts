import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarHttpMockService implements UpdateCarRepository {
  updateCar = (id: number, car: Car) => Promise.resolve(car);
}
