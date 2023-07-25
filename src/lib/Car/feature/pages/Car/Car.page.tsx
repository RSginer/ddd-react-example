import { useParams } from 'react-router-dom';

import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

import { useGetCar } from '../../hooks/useGetCar.hook';

export const CarPage = () => {
  const { id } = useParams();
  const { isLoading, data: car, error } = useGetCar({ id });

  return (
    <PageContainer header={<Header />}>
      {isLoading && <Loader />}
      {!isLoading && error !== null && <Error />}
      {!isLoading && !error && car && <p>Car Page</p>}
    </PageContainer>
  );
};
