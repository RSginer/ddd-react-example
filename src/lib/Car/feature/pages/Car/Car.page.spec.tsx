import { describe, expect, it } from 'vitest';

import { createWrapper, GetCarsHttpMockService } from '@Test';
import { render } from '@testing-library/react';

import { CarPage } from './Car.page';

describe('Car page', () => {
  it('Should render car page', () => {
    const Wrapper = createWrapper(new GetCarsHttpMockService());
    const { getByText } = render(
      <Wrapper>
        <CarPage />
      </Wrapper>,
    );

    expect(getByText('Car Page')).toBeDefined();
  });
});
