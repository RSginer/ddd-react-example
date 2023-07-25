import { useContext } from 'react';

import { Car } from '@Car/Domain';
import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';
import { useQuery } from '@tanstack/react-query';

export interface UseGetCarProps {
  id?: string;
}

export interface UseGetCarResult {
  isLoading: boolean;
  error: unknown;
  data: Car;
  isSuccess: boolean;
  queryKey: string;
}

export const useGetCar = ({ id }: UseGetCarProps) => {
  const QUERY_KEY = 'getCar';
  const containerCtx = useContext(ContainerContext);
  const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
  const { isLoading, error, data, isSuccess } = useQuery(
    [QUERY_KEY, id],
    async () => id && getCarsService.getCarById(id),
  );

  if (!id) {
    return {
      isLoading: false,
      data: undefined,
      error: {
        message: 'You need to provide a car id',
      },
    };
  }

  return {
    isLoading,
    error,
    data,
    isSuccess,
    queryKey: QUERY_KEY,
  };
};
