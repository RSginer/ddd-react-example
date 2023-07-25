import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import { Header } from './Header.component';

describe('Header', () => {
  it('Should render header component', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toBeDefined();
  });
});
