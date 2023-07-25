import { CarDetails } from './CarDetails';

export interface Car {
  id: number;
  name: string;
  brand: string;
  pictureUrl: string;
  regNumber: string;
  details: CarDetails;
}
