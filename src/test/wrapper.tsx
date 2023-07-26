import { asValue, createContainer } from 'awilix';
import { PropsWithChildren } from 'react';

import { GetCarsRepository, GetCarsService, UpdateCarRepository, UpdateCarService } from '@Car/Domain';
import {
  ContainerContext,
  ContainerRegisteredServices,
  GET_CARS_SERVICE,
  UPDATE_CARS_SERVICE,
} from '@Shared/Infrastructure';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GetCarsHttpMockService } from './GetCarsHttpMock.service';
import { UpdateCarHttpMockService } from './UpdateCarHttpMockService';

export const createWrapper = (
  getCarsRepository: GetCarsRepository = new GetCarsHttpMockService(),
  updateCarRepository: UpdateCarRepository = new UpdateCarHttpMockService(),
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const container = createContainer<ContainerRegisteredServices>();

  container.register({
    [GET_CARS_SERVICE]: asValue(new GetCarsService(getCarsRepository)),
    [UPDATE_CARS_SERVICE]: asValue(new UpdateCarService(updateCarRepository)),
  });

  return ({ children }: PropsWithChildren) => (
    <ContainerContext.Provider value={container}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ContainerContext.Provider>
  );
};
