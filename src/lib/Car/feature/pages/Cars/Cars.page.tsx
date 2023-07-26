import { ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Car } from '@Car/Domain';
import { useGetCars, useSearch, useSort } from '@Car/Feature';
import { CarsTable, InputSearch, SortSelect } from '@Car/Ui';
import { Error, Header, Loader, PageContainer } from '@Shared/Ui';

export const CarsPage = () => {
  const { sort, setSort } = useSort();
  const { debouncedSearchQuery, searchQuery } = useSearch();
  const { isLoading, error, data: cars } = useGetCars({ searchQuery, sort });
  const navigate = useNavigate();

  const onInputSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    debouncedSearchQuery(value);
  };

  const onSortPropertyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort({ ...sort, property: e.target.value as keyof Car });
  };

  const onSortOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort({ ...sort, order: e.target.value as 'asc' | 'desc' });
  };

  const onEditCarClick = (_e: MouseEvent, car: Car) => {
    navigate(`/car/${car.id}`);
  };

  return (
    <PageContainer header={<Header />}>
      <InputSearch onChange={onInputSearchChange} />
      <SortSelect onSortOrderChange={onSortOrderChange} onSortPropertyChange={onSortPropertyChange} />
      {isLoading && <Loader />}
      {error !== null && !isLoading && <Error />}
      {cars && !isLoading && !error && <CarsTable cars={cars} onEditCarClick={onEditCarClick} />}
    </PageContainer>
  );
};
