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
  <div className="grid gap-y-2">
    <div className="lg:grid lg:grid-cols-10 gap-3 mb-3 hidden">
      {headerLabels.map((headerLabel) => (
        <div
          className={`${headerLabel.isClickable ? 'cursor-pointer' : 'cursor-default'}  lg:block col-span-${
            headerLabel.colSpan
          }`}
          onClick={
            headerLabel.isClickable && headerLabel.property
              ? (ev: MouseEvent) => headerLabel.property && onHeaderClick(ev, headerLabel.property)
              : undefined
          }
        >
          <CarsTableHeader label={headerLabel.label} />
        </div>
      ))}
    </div>

    {cars.map((car) => (
      <div className="grid lg:grid-cols-10 gap-3" key={car.id}>
        <div className="flex items-center justify-center col-span-2 lg:col-span-3">
          <img src={car.pictureUrl} alt={car.name} />
        </div>
        <CarsTableCell label={car.regNumber} />
        <CarsTableCell label={car.name} />
        <CarsTableCell label={car.brand} />

        <div className="flex flex-col gap-4 items-center justify-between col-span-2 lg:col-span-1">
          <button className="w-full py-4 bg-black text-white h-full">Edit</button>
          <button className="w-full py-4 bg-white text-black border h-full border-black">Delete</button>
        </div>
      </div>
    ))}
  </div>
);
