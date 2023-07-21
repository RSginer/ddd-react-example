import { describe, expect, it, vi } from 'vitest';

import { Car, UpdateCarRepository, UpdateCarService } from '@Car/Domain';

const mockedCar: Car = { id: '2', name: 'mock', brand: 'mock', pictureUrl: 'http://mock.io' };

const updateCarMock = vi.fn((car: Car) => Promise.resolve(mockedCar));

class UpdateCarMockService implements UpdateCarRepository {
  updateCar = updateCarMock;
}

describe('GetCarsService', () => {
  it('Should call carsGetter to fetch cars', async () => {
    const updateCarService: UpdateCarService = new UpdateCarService(new UpdateCarMockService());
    await updateCarService.updateCar({
      id: '2',
      name: 'test',
      brand: 'mock',
      pictureUrl: 'test',
    });
    expect(updateCarMock).toHaveBeenCalled();
  });
});
