import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import { Header } from '../Header/Header.component';
import { PageContainer } from './PageContainer.component';

describe('PageContainer', () => {
  it('Should render PageContainer component', () => {
    const { getByTestId } = render(<PageContainer header={<Header />} />);

    expect(getByTestId('main')).toBeDefined();
    expect(getByTestId('header')).toBeDefined();
  });

  it('Should render PageContainer childrens', () => {
    const { getByTestId } = render(
      <PageContainer header={<Header />}>
        <div data-testid="test" />
      </PageContainer>,
    );

    expect(getByTestId('test')).toBeDefined();
  });
});
