import { useContext } from 'react';
import { useQuery } from 'react-query';

import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';

interface UseGetCarsProps {
  searchQuery?: string;
}

export const useGetCars = ({ searchQuery }: UseGetCarsProps) => {
  const QUERY_KEY = 'getCars';
  const containerCtx = useContext(ContainerContext);
  const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
  const { isLoading, error, data } = useQuery([QUERY_KEY, searchQuery], () => getCarsService.getCars(searchQuery));

  return {
    isLoading,
    error,
    data,
    queryKey: QUERY_KEY,
  };
};
