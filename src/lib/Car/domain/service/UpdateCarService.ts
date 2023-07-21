import { Car } from "../model/Car";
import { UpdateCarRepository } from "../repository/UpdateCarRepository";

export class UpdateCarService {
    constructor(
        private carUpdatter: UpdateCarRepository
    ) {}

    updateCar(car: Car) {
        return this.carUpdatter.updateCar(car);
    }
}