import { Car, GetCarsRepository } from '@Car/Domain';

export class GetCarsHttpService implements GetCarsRepository {
    getCars = (): Car[] => ([{
        id: '',
        brand: '',
        pictureUrl: ''
    }])

}
