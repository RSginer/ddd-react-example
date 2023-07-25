import { GetCarsRepository } from '@Car/Domain';

import * as db from '../../server/db.json';

export class GetCarsHttpMockService implements GetCarsRepository {
  getCars = () => Promise.resolve(db.cars);
}

export class GetCarsHttpMockErrorService implements GetCarsRepository {
  getCars = () => Promise.reject({});
}
