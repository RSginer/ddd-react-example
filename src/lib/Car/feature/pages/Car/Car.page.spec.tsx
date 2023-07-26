import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { createWrapper, GetCarsHttpMockService } from '@Test';
import { render, waitFor } from '@testing-library/react';

import * as db from '../../../../../../server/db.json';
import { CarPage } from './Car.page';

vi.mock('@Car/Feature', async () => {
  const actual = await vi.importActual('@Car/Feature');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...(actual as any),
    useGetCar: vi.fn().mockImplementation(() => ({
      data: db.cars[0],
      isLoading: false,
      error: null,
    })),
  };
});

describe('Car page', () => {
  it('Should render car page', async () => {
    const Wrapper = createWrapper(new GetCarsHttpMockService());
    const { getByTestId } = render(
      <Wrapper>
        <BrowserRouter>
          <CarPage />
        </BrowserRouter>
      </Wrapper>,
    );

    await waitFor(() => expect(getByTestId('carDetails')).toBeDefined());
  });
});
