import { Car } from '@Car/Domain';

interface CarsTableProps {
  cars: Car[];
}

export const CarsTable = ({ cars }: CarsTableProps) => (
  <div>
    {cars.map((car) => (
      <p>{car.name}</p>
    ))}
  </div>
);
