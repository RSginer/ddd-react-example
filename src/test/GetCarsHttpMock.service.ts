import { GetCarsRepository } from '@Car/Domain';

import * as db from '../../server/db.json';

export class GetCarsHttpMockService implements GetCarsRepository {
  getCarById = () => Promise.resolve(db.cars[0]);
  getCars = () => Promise.resolve(db.cars);
}

export class GetCarsHttpMockErrorService implements GetCarsRepository {
  getCarById = () => Promise.reject({});
  getCars = () => Promise.reject({});
}
