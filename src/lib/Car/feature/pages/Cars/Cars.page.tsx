import { MouseEvent } from 'react';

import { useGetCars } from '@Car/Feature';
import { CarsTable, InputSearch } from '@Car/Ui';
import { Header, PageContainer } from '@Shared/Ui';

import { headerLabels } from './headerLabels.const';

export const CarsPage = () => {
  const { isLoading, error, data: cars } = useGetCars();

  const onHeaderClick = (ev: MouseEvent, headerLabel: string) => {
    console.log(ev);
    console.log(headerLabel);
  };

  return (
    <PageContainer header={<Header />}>
      {isLoading && <p>Loading...</p>}
      {error !== null && !isLoading && <p>Error: {JSON.stringify(error)}</p>}
      {cars && !isLoading && !error && (
        <>
          <InputSearch />
          <div className="flex mb-4">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" title="Sort by">
              <option>Reg Number</option>
              <option>Model</option>
            </select>
          </div>
          <CarsTable onHeaderClick={onHeaderClick} headerLabels={headerLabels} cars={cars} />
        </>
      )}
    </PageContainer>
  );
};
