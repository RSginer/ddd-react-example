import { describe, expect, it, vi } from 'vitest';

import { UpdateCarHttpService } from '../';
import * as db from '../../../../../server/db.json';

global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(db.cars[0]),
  }),
);

describe('GetCarsHttpService', async () => {
  it('Should update a car', async () => {
    const udpateCarHttpService = new UpdateCarHttpService('http://localhost:3000');

    expect(await udpateCarHttpService.updateCar(1, db.cars[0])).toBe(db.cars[0]);
  });
});
