import { CarsTable, useCars } from '@Car/Feature';
import { Header } from '@Shared/Ui';

export const CarsPage = () => {
  const { isLoading, error, data: cars } = useCars();

  return (
    <>
      <Header />
      {!isLoading && error && <p>Error: {JSON.stringify(error)}</p>}
      {isLoading && <p>Loading...</p>}
      {cars && !isLoading && !error && <CarsTable cars={cars} />}
    </>
  );
};
