import { Car } from '@Car/Domain';

interface CarsTableCellProps {
  prop: string;
}

export const CarsTableCell = ({ prop }: CarsTableCellProps) => (
  <div className="flex items-center justify-center">{prop}</div>
);

interface CarsTableProps {
  cars: Car[];
}

export const CarsTable = ({ cars }: CarsTableProps) => (
  <div className="grid grid-cols-4 gap-3">
    <CarsTableCell prop={'ID'} />
    <CarsTableCell prop={'NAME'} />
    <CarsTableCell prop={'BRAND'} />
    <CarsTableCell prop={'IMG'} />

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
