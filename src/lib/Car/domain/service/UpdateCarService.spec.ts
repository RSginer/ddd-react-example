import { describe, expect, it, vi } from 'vitest';

import { Car, UpdateCarRepository, UpdateCarService } from '@Car/Domain';

const mockedCar: Car = {
  id: 5,
  name: 'Tarraco',
  brand: 'SEAT',
  regNumber: '5237OKH',
  pictureUrl:
    'https://www.seat.com/content/dam/public/seat-website/myco/2325/global-header/global-navigation/models/lateral-view-new-seat-tarraco-xperience-dark-camouflage-colour.png',
  details: {
    engine: 'TDI 90cv',
    maxSpeedInKmh: 190,
    extras: {
      travelKit: true,
      lightPack: true,
    },
  },
};

const updateCarMock = vi.fn((car: Car) => Promise.resolve(mockedCar));

class UpdateCarMockService implements UpdateCarRepository {
  updateCar = updateCarMock;
}

describe('GetCarsService', () => {
  it('Should call carsGetter to fetch cars', async () => {
    const updateCarService: UpdateCarService = new UpdateCarService(new UpdateCarMockService());
    await updateCarService.updateCar({
      id: 5,
      name: 'Tarraco',
      brand: 'SEAT',
      regNumber: '5237OKH',
      pictureUrl:
        'https://www.seat.com/content/dam/public/seat-website/myco/2325/global-header/global-navigation/models/lateral-view-new-seat-tarraco-xperience-dark-camouflage-colour.png',
      details: {
        engine: 'TDI 90cv',
        maxSpeedInKmh: 190,
        extras: {
          travelKit: true,
          lightPack: true,
        },
      },
    });
    expect(updateCarMock).toHaveBeenCalled();
  });
});
