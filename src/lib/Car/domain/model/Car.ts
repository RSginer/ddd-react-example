import { CarDetails } from './CarDetails';

export class Car {
  constructor(
    public id: number,
    public name: string,
    public brand: string,
    public pictureUrl: string,
    public regNumber: string,
    public details: CarDetails,
  ) {}
}
