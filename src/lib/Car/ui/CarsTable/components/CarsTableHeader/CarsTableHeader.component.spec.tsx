import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import { CarsTableHeader } from './CarsTableHeader.component';

describe('CarsTableHeader', () => {
  it('Should render label', () => {
    const label = 'test';
    const { getByText } = render(<CarsTableHeader label={label} />);

    expect(getByText(label)).toBeDefined();
  });
});
