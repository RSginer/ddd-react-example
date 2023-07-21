import { Car } from '@Car/Domain';

import { CarsTableCell } from './components/CarTableCell/CarTableCell.component';
import { CarsTableHeader } from './components/CarTableHeader/CarTableHeader.component';

interface CarsTableProps {
  cars: Car[];
}

export const CarsTable = ({ cars }: CarsTableProps) => (
  <div className="grid grid-cols-4 gap-3">
    <CarsTableHeader prop={'ID'} />
    <CarsTableHeader prop={'NAME'} />
    <CarsTableHeader prop={'BRAND'} />
    <CarsTableHeader prop={'IMG'} />

    {cars.map((car) => (
      <>
        <CarsTableCell prop={car.id} />
        <CarsTableCell prop={car.name} />
        <CarsTableCell prop={car.brand} />
        <div>
          <img src={car.pictureUrl} alt={car.name} />
        </div>
      </>
    ))}
  </div>
);
