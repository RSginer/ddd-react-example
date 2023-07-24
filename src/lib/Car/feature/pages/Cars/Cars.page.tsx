import { MouseEvent } from 'react';

import { useGetCars } from '@Car/Feature';
import { CarsTable, CarsTableHeaderLabel } from '@Car/Ui';
import { Header, PageContainer } from '@Shared/Ui';

export const CarsPage = () => {
  const { isLoading, error, data: cars } = useGetCars();

  const onHeaderClick = (ev: MouseEvent, headerLabel: string) => {
    console.log(ev);
    console.log(headerLabel);
  };

  const headerLabels: CarsTableHeaderLabel[] = [
    {
      label: 'Image',
      property: 'pictureUrl',
      isClickable: false,
    },
    {
      label: 'Reg Number',
      property: 'regNumber',
      isClickable: true,
    },
    {
      label: 'Model',
      property: 'name',
      isClickable: true,
    },
    {
      label: 'Brand',
      property: 'brand',
      isClickable: true,
    },
    {
      label: 'Actions',
      isClickable: false,
    },
  ];

  return (
    <PageContainer header={<Header />}>
      {isLoading && <p>Loading...</p>}
      {error !== null && !isLoading && <p>Error: {JSON.stringify(error)}</p>}
      {cars && !isLoading && !error && (
        <CarsTable onHeaderClick={onHeaderClick} headerLabels={headerLabels} cars={cars} />
      )}
    </PageContainer>
  );
};
