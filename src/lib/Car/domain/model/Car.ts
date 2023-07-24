import { CarDetails } from './CarDetails';

export interface Car {
  id: string;
  name: string;
  brand: string;
  pictureUrl: string;
  regNumber: string;
  details: CarDetails;
}
