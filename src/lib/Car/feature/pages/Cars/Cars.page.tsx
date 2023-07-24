import { ChangeEvent } from 'react';

import { useGetCars, useSearch } from '@Car/Feature';
import { CarsTable, InputSearch, SortSelect } from '@Car/Ui';
import { Header, Loader, PageContainer } from '@Shared/Ui';

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
      {error !== null && !isLoading && (
        <div className="bg-red-500 border-red p-5 rounded">
          <p className="font-bold text-white">Error</p>
          <p className="bg-red-50 rounded p-5 mt-2">{JSON.stringify(error)}</p>
        </div>
      )}
      {cars && !isLoading && !error && <CarsTable cars={cars} />}
    </PageContainer>
  );
};
