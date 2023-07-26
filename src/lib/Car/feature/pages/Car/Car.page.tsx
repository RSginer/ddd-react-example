import { useNavigate, useParams } from 'react-router-dom';

import { Car } from '@Car/Domain';
import { CarDetails, useGetCar } from '@Car/Feature';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

export const CarPage = () => {
  const { id } = useParams();
  const { isLoading, data: car, error } = useGetCar({ id });
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/');
  };

  const onSave = (car: Car) => {
    console.log(car);
  };

  return (
    <PageContainer header={<Header />}>
      {isLoading && <Loader />}
      {!isLoading && error !== null && <Error />}
      {!isLoading && !error && car && <CarDetails car={car} onBackButtonClick={onBackButtonClick} onSave={onSave} />}
    </PageContainer>
  );
};
