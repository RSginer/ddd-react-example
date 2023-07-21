import { Car } from '@Car/Domain';

import { CarsTableCell } from './components/CarsTableCell/CarsTableCell.component';
import { CarsTableHeader } from './components/CarsTableHeader/CarsTableHeader.component';

interface CarsTableProps {
  cars: Car[];
}

export const CarsTable = ({ cars }: CarsTableProps) => (
  <div className="grid grid-cols-5 gap-3">
    <CarsTableHeader prop={'IMAGE'} />
    <CarsTableHeader prop={'ID'} />
    <CarsTableHeader prop={'NAME'} />
    <CarsTableHeader prop={'BRAND'} />
    <CarsTableHeader prop={'ACTIONS'} />

    {cars.map((car) => (
      <>
        <div>
          <img src={car.pictureUrl} alt={car.name} />
        </div>
        <CarsTableCell prop={car.id} />
        <CarsTableCell prop={car.name} />
        <CarsTableCell prop={car.brand} />

        <div className="flex flex-col gap-4 items-center">
          <button className="w-28 px-10 h-10 bg-yellow-500 rounded text-white">Edit</button>
          <button className="w-28 px-10 h-10 bg-red-500 rounded text-white">Delete</button>
        </div>
      </>
    ))}
  </div>
);
