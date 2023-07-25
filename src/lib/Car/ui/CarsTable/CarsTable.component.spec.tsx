import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import * as db from '../../../../../server/db.json';
import { CarsTable } from './CarsTable.component';

describe('CarsTable', () => {
  it('Should render the cars table', () => {
    const { getByText, getAllByTestId } = render(<CarsTable cars={db.cars} />);

    // Header
    const imageHader = getByText('Image');
    const licensePlateHeader = getByText('License plate');
    const modelHeader = getByText('Model');
    const brandHeader = getByText('Brand');
    const actionsHeader = getByText('Actions');

    expect(imageHader).toBeDefined();
    expect(licensePlateHeader).toBeDefined();
    expect(modelHeader).toBeDefined();
    expect(brandHeader).toBeDefined();
    expect(actionsHeader).toBeDefined();

    // Rows
    const carImages = getAllByTestId('carImage');
    const carLicensePlates = getAllByTestId('licensePlate');
    const carModel = getAllByTestId('name');
    const carBrand = getAllByTestId('brand');
    const carActions = getAllByTestId('actions');

    expect(carImages.length).toBe(db.cars.length);
    expect(carLicensePlates.length).toBe(db.cars.length);
    expect(carModel.length).toBe(db.cars.length);
    expect(carBrand.length).toBe(db.cars.length);
    expect(carActions.length).toBe(db.cars.length);
  });
});
