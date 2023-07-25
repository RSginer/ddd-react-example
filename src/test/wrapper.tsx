import { asValue, createContainer } from 'awilix';
import { PropsWithChildren } from 'react';

import { GetCarsRepository, GetCarsService } from '@Car/Domain';
import { ContainerContext, ContainerRegisteredServices, GET_CARS_SERVICE } from '@Shared/Infrastructure';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createWrapper = (getCarsRepository: GetCarsRepository) => {
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
  });

  return ({ children }: PropsWithChildren) => (
    <ContainerContext.Provider value={container}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ContainerContext.Provider>
  );
};
