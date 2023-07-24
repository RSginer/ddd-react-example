import debounce from 'lodash.debounce';
import { ChangeEvent, useEffect, useState } from 'react';

import { useGetCars } from '@Car/Feature';
import { CarsTable, InputSearch, SortSelect } from '@Car/Ui';
import { Header, Loader, PageContainer } from '@Shared/Ui';

export const CarsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [debouncedSearchQuery] = useState(() => debounce(setSearchQuery, 500));
  const { isLoading, error, data: cars } = useGetCars({ searchQuery });

  useEffect(() => {
    return () => {
      debouncedSearchQuery.cancel();
    };
  }, [debouncedSearchQuery]);

  const onInputSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    debouncedSearchQuery(value);
  };

  return (
    <PageContainer header={<Header />}>
      <InputSearch onChange={onInputSearchChange} />
      <SortSelect />
      {isLoading && <Loader />}
      {error !== null && !isLoading && <p>Error: {JSON.stringify(error)}</p>}
      {cars && !isLoading && !error && <CarsTable cars={cars} />}
    </PageContainer>
  );
};
