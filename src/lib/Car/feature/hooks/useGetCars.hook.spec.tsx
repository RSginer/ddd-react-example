import { describe, expect, it } from 'vitest';

import { Car } from '@Car/Domain';
import { createWrapper, GetCarsHttpMockService } from '@Test';
import { renderHook } from '@testing-library/react-hooks';

import * as db from '../../../../../server/db.json';
import { useGetCars } from './useGetCars.hook';

const responseMock = db.cars;
const searchQuery = '';
const sort = {
  property: 'regNumber' as keyof Car,
  order: 'asc' as 'asc' | 'desc',
};

describe('useGetCars', () => {
  it('Should fetch the cars given searchQuery and sort', async () => {
    const { result, waitFor } = renderHook(() => useGetCars({ searchQuery, sort }), {
      wrapper: createWrapper(new GetCarsHttpMockService()),
    });

    await waitFor(() => result.current.isLoading === false);

    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBe(responseMock);
    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.queryKey).toBe('getCars');
  });
});
