import { describe, expect, it, vi } from 'vitest';

import { Car, GetCarsRepository, GetCarsService } from '@Car/Domain';

const mockedCars: Car[] = [
  {
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
  },
];

const getCarsMock = vi.fn(() => Promise.resolve(mockedCars));

class GetCarsMockService implements GetCarsRepository {
  getCars = getCarsMock;
  getCarById = () => Promise.resolve(mockedCars[0]);
}

describe('GetCarsService', () => {
  it('Should call carsGetter to fetch cars', async () => {
    const getCarsService: GetCarsService = new GetCarsService(new GetCarsMockService());
    const cars: Car[] = await getCarsService.getCars();

    expect(cars).toBe(mockedCars);
    expect(getCarsMock).toHaveBeenCalled();
  });

  it('Should call carsGetter with parametters to fetch cars', async () => {
    const getCarsService: GetCarsService = new GetCarsService(new GetCarsMockService());
    const searchQuery = 'Ibiza';
    const sort = {
      property: 'name' as keyof Car,
      order: 'asc' as 'asc' | 'desc',
    };
    const cars: Car[] = await getCarsService.getCars(searchQuery, sort);

    expect(cars).toBe(mockedCars);
    expect(getCarsMock).toHaveBeenCalledWith(searchQuery, sort);
  });
});
