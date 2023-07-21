import { Car } from "../../domain/model/Car";
import { UpdateCarRepository } from "../../domain/repository/UpdateCarRepository";

export class UpdateCarHttpService implements UpdateCarRepository {
    updateCar = (car: Car) => ({id: '', brand: '', pictureUrl: ''});
}