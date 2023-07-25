import { asValue, createContainer } from 'awilix';
import { PropsWithChildren } from 'react';
import { describe, expect, it } from 'vitest';

import { Car, GetCarsRepository, GetCarsService } from '@Car/Domain';
import { ContainerContext, ContainerRegisteredServices, GET_CARS_SERVICE } from '@Shared/Infrastructure';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';

import * as db from '../../../../../server/db.json';
import { useGetCars } from './useGetCars.hook';

export class GetCarsHttpMockService implements GetCarsRepository {
  getCars = () => Promise.resolve(db.cars);
}

const responseMock = db.cars;

const searchQuery = '';
const sort = {
  property: 'regNumber' as keyof Car,
  order: 'asc' as 'asc' | 'desc',
};

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  queryClient.setQueryDefaults(['getCars'], { retry: 5 });

  const container = createContainer<ContainerRegisteredServices>();

  container.register({
    [GET_CARS_SERVICE]: asValue(new GetCarsService(new GetCarsHttpMockService())),
  });

  return ({ children }: PropsWithChildren) => (
    <ContainerContext.Provider value={container}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ContainerContext.Provider>
  );
};

describe('useGetCars', () => {
  it('Should fetch the cars given searchQuery and sort', async () => {
    const { result, waitFor } = renderHook(() => useGetCars({ searchQuery, sort }), { wrapper: createWrapper() });

    await waitFor(() => result.current.isLoading === false);

    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(responseMock);
  });
});
