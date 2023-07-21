import { asValue, createContainer } from 'awilix';

import { GetCarsService } from '../../Car/domain/service/GetCarsService';
import { UpdateCarService } from '../../Car/domain/service/UpdateCarService';
import { GetCarsHttpService } from '../../Car/infrastructure/http/GetCarsHttpService';
import { UpdateCarHttpService } from '../../Car/infrastructure/http/UpdateCarHttpService';


export const createDIContainer = () => {
    const container = createContainer()

    container.register({
        getCarsService: asValue(new GetCarsService(new GetCarsHttpService())),
        updateCarsService: asValue(new UpdateCarService(new UpdateCarHttpService()))
    });

return container;
}