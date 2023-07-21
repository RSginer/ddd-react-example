import { Car, GetCarsService } from '@Car/Domain';

import { GetCarsRepository } from '../';

const mockedCars: Car[] = [{ id: '', name: 'mock', brand: 'mock', pictureUrl: 'http://mock.io' }];

const getCarsMock: jest.Mock<Promise<Car[]>> = jest.fn(() => Promise.resolve(mockedCars));

class GetCarsMockService implements GetCarsRepository {
  getCars = getCarsMock;
}

describe('GetCarsService', () => {
  it('Should call carsGetter to fetch cars', async () => {
    const getCarsService: GetCarsService = new GetCarsService(new GetCarsMockService());
    const cars: Car[] = await getCarsService.getCars();

    expect(cars).toBe(mockedCars);
    expect(getCarsMock).toHaveBeenCalled();
  });
});
