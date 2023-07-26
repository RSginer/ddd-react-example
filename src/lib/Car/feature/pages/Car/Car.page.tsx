import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Car } from '@Car/Domain';
import { CarDetails, useGetCar } from '@Car/Feature';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

import { useUpdateCar } from '../../hooks/useUpdateCar.hook';

export const CarPage = () => {
  const { id } = useParams();
  const { isLoading, data: car, error, queryKey } = useGetCar({ id });
  const {
    updateCar,
    isLoading: isUpdateLoading,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useUpdateCar({ id, updateQueryKey: queryKey });
  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success(`Car updated!`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isUpdateError) {
      toast.error(`Car update error!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
  }, [isUpdateError]);

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
      {(isLoading || isUpdateLoading) && <Loader />}
      {!isLoading && !isUpdateLoading && error !== null && <Error />}
      {!isLoading && !error && car && !isUpdateLoading && (
        <CarDetails car={car} onBackButtonClick={onBackButtonClick} onSave={onSave} />
      )}
      <ToastContainer />
    </PageContainer>
  );
};
