import { useContext } from 'react';

import { Car } from '@Car/Domain';
import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';
import { useQuery } from '@tanstack/react-query';

export interface UseGetCarsProps {
  searchQuery?: string;
  sort: {
    property: keyof Car;
    order: 'asc' | 'desc';
  };
}

export interface UseGetCarsResult {
  isSuccess: boolean;
  isLoading: boolean;
  error: unknown;
  data?: Car[];
  queryKey: string;
}

export const useGetCars = ({ searchQuery, sort }: UseGetCarsProps): UseGetCarsResult => {
  const QUERY_KEY = 'getCars';
  const containerCtx = useContext(ContainerContext);
  const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
  const { isLoading, error, data, isSuccess } = useQuery([QUERY_KEY, searchQuery, sort], async () =>
    getCarsService.getCars(searchQuery, sort),
  );

  return {
    isSuccess,
    isLoading,
    error,
    data,
    queryKey: QUERY_KEY,
  };
};
