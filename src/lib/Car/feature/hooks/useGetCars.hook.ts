import { useContext } from 'react';
import { useQuery } from 'react-query';

import { Car } from '@Car/Domain';
import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';

interface UseGetCarsProps {
  searchQuery?: string;
  sort: {
    property: keyof Car;
    order: 'asc' | 'desc';
  };
}

export const useGetCars = ({ searchQuery, sort }: UseGetCarsProps) => {
  const QUERY_KEY = 'getCars';
  const containerCtx = useContext(ContainerContext);
  const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
  const { isLoading, error, data } = useQuery([QUERY_KEY, searchQuery, sort], () =>
    getCarsService.getCars(searchQuery, sort),
  );

  return {
    isLoading,
    error,
    data,
    queryKey: QUERY_KEY,
  };
};
