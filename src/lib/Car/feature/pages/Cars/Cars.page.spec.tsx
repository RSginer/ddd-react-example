import { describe, expect, it } from 'vitest';

import { createWrapper, GetCarsHttpMockErrorService, GetCarsHttpMockService } from '@Test';
import { render, waitFor } from '@testing-library/react';

import { CarsPage } from './Cars.page';

describe('Cars page', () => {
  it('Should render cars page with cars table', async () => {
    const Wrapper = createWrapper(new GetCarsHttpMockService());

    const { getByTestId, getByTitle, getByRole } = render(
      <Wrapper>
        <CarsPage />
      </Wrapper>,
    );

    const loading = getByRole('status');

    expect(loading).toBeDefined();

    await waitFor(() => expect(getByTestId('carsTable')).toBeDefined());

    const pageContainer = getByTestId('main');
    const searchInput = getByTitle('search');
    const sortSelects = getByTestId('sortSelects');

    expect(pageContainer).toBeDefined();
    expect(searchInput).toBeDefined();
    expect(sortSelects).toBeDefined();
  });

  it('Should render error', async () => {
    const Wrapper = createWrapper(new GetCarsHttpMockErrorService());

    const { getByText } = render(
      <Wrapper>
        <CarsPage />
      </Wrapper>,
    );

    await waitFor(() => expect(getByText('Error')).toBeDefined());
  });
});
