import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import { CarsTableCell } from './CarsTableCell.component';

describe('CarsTableCell', () => {
  it('Should render label', () => {
    const label = 'test';
    const { getByText } = render(<CarsTableCell label={label} />);

    expect(getByText(label)).toBeDefined();
  });
});
