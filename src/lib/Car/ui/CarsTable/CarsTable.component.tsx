import { MouseEvent } from 'react';
import { FaEdit } from 'react-icons/fa';
import LicensePlate from 'react-license-plate';

import { Car } from '@Car/Domain';

import { CarsTableCell } from './components/CarsTableCell/CarsTableCell.component';
import { CarsTableHeader } from './components/CarsTableHeader/CarsTableHeader.component';

interface CarsTableProps {
  cars: Car[];
  onEditCarClick: (e: MouseEvent, car: Car) => void;
}

export const CarsTable = ({ cars, onEditCarClick }: CarsTableProps) => (
  <div data-testid="carsTable" className="grid gap-y-2">
    <div className="lg:grid grid-cols-10 gap-3 mb-3 hidden">
      <div className="lg:col-span-3 col-span-2">
        <CarsTableHeader label="Image" />
      </div>
      <div className="col-span-2">
        <CarsTableHeader label="License plate" />
      </div>
      <div className="col-span-2">
        <CarsTableHeader label="Model" />
      </div>
      <div className="col-span-2">
        <CarsTableHeader label="Brand" />
      </div>
      <div className="col-span-1">
        <CarsTableHeader label="Actions" />
      </div>
    </div>

    {cars.map((car) => (
      <div className="grid lg:grid-cols-10 gap-3" key={car.id}>
        <div className="flex items-center justify-center col-span-2 lg:col-span-3">
          <img data-testid="carImage" src={car.pictureUrl} alt={car.name} />
        </div>
        <CarsTableCell
          dataTestId="licensePlate"
          label={<LicensePlate countryCode="ES" plateId={car.regNumber} height={45} />}
        />
        <CarsTableCell dataTestId="name" label={car.name} />
        <CarsTableCell
          dataTestId="brand"
          label={
            car.brand === 'SEAT' ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/SEAT_logo_%282012%29.png/966px-SEAT_logo_%282012%29.png"
                alt="seat"
                className="w-10"
              />
            ) : (
              car.brand
            )
          }
        />
        <div
          data-testid="actions"
          className="flex flex-col gap-4 items-center justify-between col-span-2 lg:col-span-1"
        >
          <button
            title="Edit"
            className="w-full py-4 bg-white text-black h-full rounded text-center flex items-center justify-center"
            onClick={(e) => onEditCarClick(e, car)}
          >
            <FaEdit size={30} />
          </button>
        </div>
      </div>
    ))}
  </div>
);
