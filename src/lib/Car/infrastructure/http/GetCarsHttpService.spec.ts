import { describe, expect, it, vi } from 'vitest';

import * as db from '../../../../../server/db.json';
import { GetCarsHttpService } from './GetCarsHttpService';

global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(db.cars),
  }),
);

describe('GetCarsHttpService', async () => {
  it('Should fetch cars', async () => {
    const getCarsHttpService = new GetCarsHttpService('http://localhost:3000');

    expect(await getCarsHttpService.getCars()).toBe(db.cars);
  });
});
