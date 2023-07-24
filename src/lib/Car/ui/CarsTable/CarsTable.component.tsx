import { MouseEvent } from 'react';

import { Car } from '@Car/Domain';

import { CarsTableCell } from './components/CarsTableCell/CarsTableCell.component';
import { CarsTableHeader } from './components/CarsTableHeader/CarsTableHeader.component';
import { CarsTableHeaderLabel } from './models/CarsTableHeaderLabel.model';

interface CarsTableProps {
  cars: Car[];
  onHeaderClick: (ev: MouseEvent, propertyName: string) => void;
  headerLabels: CarsTableHeaderLabel[];
}

export const CarsTable = ({ cars, headerLabels, onHeaderClick }: CarsTableProps) => (
  <div className="grid grid-cols-5 gap-3">
    {headerLabels.map((headerLabel) => (
      <div
        className={`${headerLabel.isClickable ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={
          headerLabel.isClickable && headerLabel.property
            ? (ev: MouseEvent) => headerLabel.property && onHeaderClick(ev, headerLabel.property)
            : undefined
        }
      >
        <CarsTableHeader label={headerLabel.label} />
      </div>
    ))}
    {cars.map((car) => (
      <div className="grid grid-cols-5 col-span-5 gap-3" key={car.id}>
        <div>
          <img src={car.pictureUrl} alt={car.name} />
        </div>
        <CarsTableCell label={car.regNumber} />
        <CarsTableCell label={car.name} />
        <CarsTableCell label={car.brand} />

        <div className="flex flex-col gap-4 items-center">
          <button className="w-28 px-10 h-10 bg-yellow-500 rounded text-white">Edit</button>
          <button className="w-28 px-10 h-10 bg-red-500 rounded text-white">Delete</button>
        </div>
      </div>
    ))}
  </div>
);
