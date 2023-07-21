import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarHttpService implements UpdateCarRepository {
    updateCar = (car: Car) => Promise.resolve({id: '', name: '', brand: '', pictureUrl: ''});
}