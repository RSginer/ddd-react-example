import { useContext } from 'react';
import { useQuery } from 'react-query';

import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';

const QUERY_KEY = 'getCars';

export const useGetCars = () => {
  const containerCtx = useContext(ContainerContext);
  const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
  const { isLoading, error, data } = useQuery(QUERY_KEY, () => getCarsService.getCars());

  return {
    isLoading,
    error,
    data,
    queryKey: QUERY_KEY,
  };
};
