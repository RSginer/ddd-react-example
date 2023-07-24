import { ChangeEvent } from 'react';

import { useGetCars, useSearch } from '@Car/Feature';
import { CarsTable, InputSearch, SortSelect } from '@Car/Ui';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

export const CarsPage = () => {
  const { debouncedSearchQuery, searchQuery } = useSearch();
  const { isLoading, error, data: cars } = useGetCars({ searchQuery });

  const onInputSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    debouncedSearchQuery(value);
  };

  return (
    <PageContainer header={<Header />}>
      <InputSearch onChange={onInputSearchChange} />
      <SortSelect />
      {isLoading && <Loader />}
      {error !== null && !isLoading && <Error />}
      {cars && !isLoading && !error && <CarsTable cars={cars} />}
    </PageContainer>
  );
};
