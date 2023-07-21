import { useGetCars } from '@Car/Feature';
import { CarsTable } from '@Car/Ui';
import { Header, PageContainer } from '@Shared/Ui';

export const CarsPage = () => {
  const { isLoading, error, data: cars } = useGetCars();

  return (
    <PageContainer header={<Header />}>
      {isLoading && <p>Loading...</p>}
      {error !== null && !isLoading && <p>Error: {JSON.stringify(error)}</p>}
      {cars && !isLoading && !error && <CarsTable cars={cars} />}
    </PageContainer>
  );
};
