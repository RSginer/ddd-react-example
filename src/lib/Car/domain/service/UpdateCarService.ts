import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarService {
    constructor(
        private carUpdater: UpdateCarRepository
    ) {}

    updateCar(car: Car) {
        return this.carUpdater.updateCar(car);
    }
}