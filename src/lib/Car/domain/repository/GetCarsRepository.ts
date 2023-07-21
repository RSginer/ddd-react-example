import { Car } from '@Car/Domain';

export interface GetCarsRepository {
    getCars: () => Car[];
}