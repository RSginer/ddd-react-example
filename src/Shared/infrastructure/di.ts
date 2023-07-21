import { asValue, createContainer } from 'awilix';

import { GetCarsService } from '../../Car/domain/service/GetCarsService.ts';
import { UpdateCarService } from '../../Car/domain/service/UpdateCarService.ts';
import { GetCarsHttpService } from '../../Car/infrastructure/http/GetCarsHttpService.ts';
import { UpdateCarHttpService } from '../../Car/infrastructure/http/UpdateCarHttpService.ts';

export const createDIContainer = () => {
    const container = createContainer()

    container.register({
        getCarsService: asValue(new GetCarsService(new GetCarsHttpService())),
        updateCarsService: asValue(new UpdateCarService(new UpdateCarHttpService()))
    });

return container;
}