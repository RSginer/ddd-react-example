import { Car, UpdateCarRepository } from '@Car/Domain';

export class UpdateCarHttpService implements UpdateCarRepository {
  updateCar = (id: number, car: Car) =>
    Promise.resolve({
      id: 0,
      name: 'Ibiza',
      brand: 'SEAT',
      regNumber: '5259 JZM',
      pictureUrl:
        'https://www.seat.com/content/dam/public/seat-website/global-header/global-navigation/models/seat-new-ibiza-pa-desirered.png',
      details: {
        engine: 'TSI 100 290cv',
        maxSpeedInKmh: 300,
        extras: {
          travelKit: true,
          lightPack: false,
        },
      },
    });
}
