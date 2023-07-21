import { Car } from "../model/Car";
import { UpdateCarRepository } from "../repository/UpdateCarRepository";

export class UpdateCarService {
    constructor(
        private carUpdater: UpdateCarRepository
    ) {}

    updateCar(car: Car) {
        return this.carUpdater.updateCar(car);
    }
}