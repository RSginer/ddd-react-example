import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarHttpService implements UpdateCarRepository {
    updateCar = (car: Car) => ({id: '', brand: '', pictureUrl: ''});
}