import { ChangeEvent, useState } from 'react';

import { useGetCars } from '@Car/Feature';
import { CarsTable, InputSearch, SortSelect } from '@Car/Ui';
import { Header, Loader, PageContainer } from '@Shared/Ui';

import { headerLabels } from './headerLabels.const';

export const CarsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const { isLoading, error, data: cars } = useGetCars({ searchQuery });

  const onInputSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setSearchQuery(value);
  };

  return (
    <PageContainer header={<Header />}>
      <InputSearch onChange={onInputSearchChange} />
      <SortSelect />
      {isLoading && <Loader />}
      {error !== null && !isLoading && <p>Error: {JSON.stringify(error)}</p>}
      {cars && !isLoading && !error && <CarsTable headerLabels={headerLabels} cars={cars} />}
    </PageContainer>
  );
};
