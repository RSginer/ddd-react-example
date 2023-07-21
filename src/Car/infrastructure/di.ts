import { asValue, createContainer } from 'awilix';

import { GetCarsService } from '../domain/service/GetCarsService.ts';
import { UpdateCarService } from '../domain/service/UpdateCarService.ts';
import { GetCarsHttpService } from './http/GetCarsHttpService.ts';
import { UpdateCarHttpService } from './http/UpdateCarHttpService.ts';

export const createDIContainer = () => {
    const container = createContainer()

    container.register({
        getCarsService: asValue(new GetCarsService(new GetCarsHttpService())),
        updateCarsService: asValue(new UpdateCarService(new UpdateCarHttpService()))
    });

return container;
}