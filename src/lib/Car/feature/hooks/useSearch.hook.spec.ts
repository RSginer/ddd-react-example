import { describe, expect, it } from 'vitest';

import { renderHook } from '@testing-library/react-hooks';

import { useSearch } from '../';

const search = 'Seat';

describe('useSearch', () => {
  it('Should set searchQuery', async () => {
    const { result, waitFor } = renderHook(() => useSearch());

    result.current.debouncedSearchQuery(search);

    await waitFor(() => result.current.searchQuery === search);

    expect(result.current.searchQuery).toBe(search);
  });
});
