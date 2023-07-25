import { describe, expect, it, vi } from 'vitest';

import { render } from '@testing-library/react';

import { InputSearch } from '../';

describe('InputSearch', () => {
  const onChange = vi.fn();

  it('Should render input', () => {
    const { getByTitle } = render(<InputSearch onChange={onChange} />);

    const input: HTMLInputElement = getByTitle('search') as HTMLInputElement;

    expect(input).toBeDefined();
  });
});
