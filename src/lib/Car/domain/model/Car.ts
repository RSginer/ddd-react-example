export interface Car {
  id: number;
  name: string;
  brand: string;
  pictureUrl: string;
  regNumber: string;
  details: CarDetails;
}

interface CarDetails {
  engine: string;
  maxSpeedInKmh: number;
  extras: CarExtras;
}

interface CarExtras {
  travelKit: boolean;
  lightPack: boolean;
}
