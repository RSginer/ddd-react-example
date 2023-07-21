import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsHttpService implements GetCarsRepository {
    getCars = async (): Promise<Car[]> => {
        const response = await fetch('http://localhost:3000/cars')
        const cars = (await response.json()) as Car[];
        
        return cars;
    }
}
