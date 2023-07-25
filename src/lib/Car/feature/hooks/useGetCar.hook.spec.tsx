import { describe, expect, it } from 'vitest';

import { createWrapper, GetCarsHttpMockService } from '@Test';
import { renderHook } from '@testing-library/react-hooks';

import * as db from '../../../../../server/db.json';
import { useGetCar } from './useGetCar.hook';

describe('useGetCar', () => {
  it('Should fetch the car given id', async () => {
    const { result, waitFor } = renderHook(() => useGetCar({ id: '1' }), {
      wrapper: createWrapper(new GetCarsHttpMockService()),
    });

    await waitFor(() => result.current.isLoading === false);

    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBe(db.cars[0]);
    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.queryKey).toBe('getCar');
  });
});
