import { describe, expect, it } from 'vitest';

import { Car } from '@Car/Domain';
import { renderHook } from '@testing-library/react-hooks';

import { useSort } from './useSort.hook';

const sort = {
  property: 'regNumber' as keyof Car,
  order: 'asc' as 'asc' | 'desc',
};

describe('useSort', () => {
  it('Should set sorting', () => {
    const { result } = renderHook(() => useSort());

    result.current.setSort(sort);

    expect(result.current.sort).toBe(sort);
  });
});
