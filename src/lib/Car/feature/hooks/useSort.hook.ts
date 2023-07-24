import { useState } from 'react';

import { Car } from '@Car/Domain';

export const useSort = () => {
  const [sort, setSort] = useState<{
    property: keyof Car;
    order: 'asc' | 'desc';
  }>({ property: 'regNumber', order: 'asc' });

  return {
    sort,
    setSort,
  };
};
