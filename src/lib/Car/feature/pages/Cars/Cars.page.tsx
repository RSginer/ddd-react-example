import { useContext, useEffect, useState } from 'react';

import { Car } from '@Car/Domain';
import { CarsTable } from '@Car/Feature';
import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';
import { Header } from '@Shared/Ui';

export const CarsPage = () => {
  const containerCtx = useContext(ContainerContext);
  const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
  const [cars, setCars] = useState<Car[]>();

  useEffect(() => {
    getCarsService
      .getCars()
      .then((cars) => {
        setCars(cars);
      })
      .catch((err) => console.log(err));
  }, [getCarsService]);

  return (
    <>
      <Header />
      <CarsTable cars={cars ?? []} />
    </>
  );
};
