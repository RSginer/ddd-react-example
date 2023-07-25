import { Params } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { createWrapper, GetCarsHttpMockService } from '@Test';
import { render, waitFor } from '@testing-library/react';

import { CarPage } from './Car.page';

vi.mock('react-router-dom', () => ({
  useParams: (): Readonly<Params<string>> => ({ id: '1' }),
}));

describe('Car page', () => {
  it('Should render car page', async () => {
    const Wrapper = createWrapper(new GetCarsHttpMockService());
    const { getByTestId } = render(
      <Wrapper>
        <CarPage />
      </Wrapper>,
    );

    await waitFor(() => expect(getByTestId('carDetails')).toBeDefined());
  });
});
