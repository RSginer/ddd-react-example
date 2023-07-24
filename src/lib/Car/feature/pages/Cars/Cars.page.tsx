import { useGetCars } from '@Car/Feature';
import { CarsTable, InputSearch, SortSelect } from '@Car/Ui';
import { Header, Loader, PageContainer } from '@Shared/Ui';

import { headerLabels } from './headerLabels.const';

export const CarsPage = () => {
  const { isLoading, error, data: cars } = useGetCars();

  return (
    <PageContainer header={<Header />}>
      <InputSearch />
      <SortSelect />
      {isLoading && <Loader />}
      {error !== null && !isLoading && <p>Error: {JSON.stringify(error)}</p>}
      {cars && !isLoading && !error && <CarsTable headerLabels={headerLabels} cars={cars} />}
    </PageContainer>
  );
};
