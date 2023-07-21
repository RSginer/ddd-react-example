import { asValue, createContainer } from 'awilix';

import { GetCarsService } from '../../../Car/domain/service/GetCarsService';
import { UpdateCarService } from '../../../Car/domain/service/UpdateCarService';
import { GetCarsHttpService } from '../../../Car/infrastructure/http/GetCarsHttpService';
import { UpdateCarHttpService } from '../../../Car/infrastructure/http/UpdateCarHttpService';

export const GET_CARS_SERVICE = 'getCarsService';
export const UPDATE_CARS_SERVICE = 'updateCarsService';
export const API_URL = 'http://localhost:3000';

export interface ContainerRegisteredServices {
    apiUrl: string,
    [GET_CARS_SERVICE]: GetCarsService,
    [UPDATE_CARS_SERVICE]: UpdateCarService
}

export const createDIContainer = () => {
    const container = createContainer<ContainerRegisteredServices>()

    container.register({
        apiUrl: asValue(API_URL),
        [GET_CARS_SERVICE]: asValue(new GetCarsService(new GetCarsHttpService(API_URL))),
        [UPDATE_CARS_SERVICE]: asValue(new UpdateCarService(new UpdateCarHttpService()))
    });

return container;
}