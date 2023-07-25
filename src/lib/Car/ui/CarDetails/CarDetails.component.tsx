import { Car } from '@Car/Domain';

export interface CarDetailsProps {
  car: Car;
}

export const CarDetails = ({ car }: CarDetailsProps) => {
  return <div data-testid="carDetails"></div>;
};
