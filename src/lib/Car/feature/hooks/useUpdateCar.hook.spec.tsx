import { describe, expect, it } from 'vitest';

import { createWrapper, GetCarsHttpMockService, UpdateCarHttpMockService } from '@Test';
import { renderHook } from '@testing-library/react-hooks';

import * as db from '../../../../../server/db.json';
import { useUpdateCar } from './useUpdateCar.hook';

describe('useUpdateCar', () => {
  it('Should update a car', async () => {
    const { result, waitFor } = renderHook(
      () =>
        useUpdateCar({
          id: '1',
          updateQueryKey: 'getCar',
        }),
      {
        wrapper: createWrapper(new GetCarsHttpMockService(), new UpdateCarHttpMockService()),
      },
    );

    result.current.updateCar({ id: 1, updatedCar: db.cars[0] });

    await waitFor(() => result.current.isLoading === false && result.current.isSuccess);

    expect(result.current.isError).toBeFalsy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeTruthy();
  });
});
