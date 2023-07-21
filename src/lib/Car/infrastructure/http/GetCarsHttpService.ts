import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsHttpService implements GetCarsRepository {

    constructor(private apiUrl: string) {}

    getCars = async (): Promise<Car[]> => {
        const response = await fetch(`${this.apiUrl}/cars`)
        const cars = (await response.json()) as Car[];
        
        return cars;
    }
}
