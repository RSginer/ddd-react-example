import { Car } from "../../domain/model/Car";
import { GetCarsRepository } from "../../domain/repository/GetCarsRepository";


export class GetCarsHttpService implements GetCarsRepository {
    getCars = (): Car[] => ([{
        id: '',
        brand: '',
        pictureUrl: ''
    }])

}
