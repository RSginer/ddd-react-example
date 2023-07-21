import { Car } from "../model/Car";

export interface UpdateCarRepository {
    updateCar: (car: Car) => Car;
}