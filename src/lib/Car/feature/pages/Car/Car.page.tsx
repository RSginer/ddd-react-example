import { useParams } from 'react-router-dom';

import { useGetCar } from '@Car/Feature';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

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
