import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import { Error } from './Error.component';

describe('Error', () => {
  it('Should render error component', () => {
    const { getByText } = render(<Error />);

    expect(getByText('Error')).toBeDefined();
  });
});
