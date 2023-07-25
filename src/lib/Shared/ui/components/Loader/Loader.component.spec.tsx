import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import { Loader } from './Loader.component';

describe('Loader', () => {
  it('Should render loader component', () => {
    const { getByRole } = render(<Loader />);

    expect(getByRole('status')).toBeDefined();
  });
});
