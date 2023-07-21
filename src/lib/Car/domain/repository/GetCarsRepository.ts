import { Car } from "../model/Car";

export interface GetCarsRepository {
    getCars: () => Car[];
}