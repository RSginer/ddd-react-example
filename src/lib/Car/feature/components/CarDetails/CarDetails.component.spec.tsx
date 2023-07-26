import { describe, expect, it, vi } from 'vitest';

import { Car } from '@Car/Domain';
import { render } from '@testing-library/react';

import * as db from '../../../../../../server/db.json';
import { CarDetails } from './CarDetails.component';

describe('CarDetails', () => {
  it('Should render CarDetails given a car', () => {
    const { getByTestId } = render(<CarDetails car={db.cars[0] as Car} onBackButtonClick={vi.fn()} onSave={vi.fn()} />);

    expect(getByTestId('carImage')).toBeDefined();
    expect(getByTestId('carNameInput')).toBeDefined();
    expect(getByTestId('carNameLabel')).toBeDefined();
    expect(getByTestId('carRegNumberLabel')).toBeDefined();
    expect(getByTestId('carRegNumberInput')).toBeDefined();
    expect(getByTestId('carEngineInput')).toBeDefined();
    expect(getByTestId('carEngineLabel')).toBeDefined();
    expect(getByTestId('carMaxSpeedInput')).toBeDefined();
    expect(getByTestId('carMaxSpeedLabel')).toBeDefined();
    expect(getByTestId('carLightPackInput')).toBeDefined();
    expect(getByTestId('carLightPackLabel')).toBeDefined();
    expect(getByTestId('carTravelKitInput')).toBeDefined();
    expect(getByTestId('carTravelKitLabel')).toBeDefined();
  });
});
