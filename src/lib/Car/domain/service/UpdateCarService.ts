import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarService {
  constructor(private carUpdater: UpdateCarRepository) {}

  updateCar(id: number, car: Car) {
    return this.carUpdater.updateCar(id, car);
  }
}
