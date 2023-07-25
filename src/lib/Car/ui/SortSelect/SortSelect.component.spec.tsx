import { describe, expect, it, vi } from 'vitest';

import { render } from '@testing-library/react';

import { SortSelect } from './SortSelect.component';

describe('InputSearch', () => {
  const onChange = vi.fn();

  it('Should render input', () => {
    const { getByTitle } = render(<SortSelect onSortOrderChange={onChange} onSortPropertyChange={onChange} />);

    const selectProperty = getByTitle('Sort by');
    const selectOrder = getByTitle('Order');

    expect(selectProperty).toBeDefined();
    expect(selectOrder).toBeDefined();
  });
});
