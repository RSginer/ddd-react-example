import { useNavigate, useParams } from 'react-router-dom';

import { useGetCar } from '@Car/Feature';
import { CarDetails } from '@Car/Ui';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

export const CarPage = () => {
  const { id } = useParams();
  const { isLoading, data: car, error } = useGetCar({ id });
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/');
  };

  return (
    <PageContainer header={<Header />}>
      {isLoading && <Loader />}
      {!isLoading && error !== null && <Error />}
      {!isLoading && !error && car && <CarDetails car={car} onBackButtonClick={onBackButtonClick} />}
    </PageContainer>
  );
};
