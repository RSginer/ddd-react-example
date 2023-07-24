import { CarDetails } from './CarDetails';

export class Car {
  constructor(
    public id: string,
    public name: string,
    public brand: string,
    public pictureUrl: string,
    public regNumber: string,
    public details: CarDetails,
  ) {}
}
