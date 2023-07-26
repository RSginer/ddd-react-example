import { useNavigate, useParams } from 'react-router-dom';

import { Car } from '@Car/Domain';
import { CarDetails, useGetCar } from '@Car/Feature';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

import { useUpdateCar } from '../../hooks/useUpdateCar.hook';

export const CarPage = () => {
  const { id } = useParams();
  const { isLoading, data: car, error, queryKey } = useGetCar({ id });
  const { updateCar, isLoading: isUpdateLoading } = useUpdateCar({ id, updateQueryKey: queryKey });
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/');
  };

  const onSave = (updatedCar: Car) => {
    if (id) {
      const intId = parseInt(id);
      updateCar({ id: intId, updatedCar });
    }
  };

  return (
    <PageContainer header={<Header />}>
      {isLoading && <Loader />}
      {!isLoading && error !== null && <Error />}
      {!isLoading && !error && car && (
        <CarDetails car={car} isLoading={isUpdateLoading} onBackButtonClick={onBackButtonClick} onSave={onSave} />
      )}
    </PageContainer>
  );
};
