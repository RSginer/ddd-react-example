import { useContext } from 'react';

import { Car } from '@Car/Domain';
import { ContainerContext, UPDATE_CARS_SERVICE } from '@Shared/Infrastructure';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UseUpdateCarProps {
  updateQueryKey?: string;
  id?: string;
}

export const useUpdateCar = ({ id, updateQueryKey }: UseUpdateCarProps) => {
  const queryClient = useQueryClient();
  const containerCtx = useContext(ContainerContext);
  const updateCarsService = containerCtx.resolve(UPDATE_CARS_SERVICE);
  const mutation = useMutation({
    mutationFn: (variables: { id: number; updatedCar: Car }) =>
      updateCarsService.updateCar(variables.id, variables.updatedCar),
    onSuccess: (data: Car) => {
      queryClient.setQueryData([updateQueryKey, id], data);
    },
  });

  return {
    updateCar: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};
