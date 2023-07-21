import { asValue, createContainer } from 'awilix';

import { GetCarsService } from '../../../Car/domain/service/GetCarsService';
import { UpdateCarService } from '../../../Car/domain/service/UpdateCarService';
import { GetCarsHttpService } from '../../../Car/infrastructure/http/GetCarsHttpService';
import { UpdateCarHttpService } from '../../../Car/infrastructure/http/UpdateCarHttpService';

export const GET_CARS_SERVICE = 'getCarsService';
export const UPDATE_CARS_SERVICE = 'updateCarsService';

export const createDIContainer = () => {
    const container = createContainer()

    container.register({
        [GET_CARS_SERVICE]: asValue(new GetCarsService(new GetCarsHttpService())),
        [UPDATE_CARS_SERVICE]: asValue(new UpdateCarService(new UpdateCarHttpService()))
    });

return container;
}