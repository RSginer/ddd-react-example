import awilix from 'awilix';
import { GetCarsService } from './Car/domain/service/GetCarsService.ts';
import { GetCarsHttpService } from './Car/infrastructure/http/GetCarsHttpService.ts';

export const createDIContainer = () => {
    const container = awilix.createContainer();

    container.register({
        carsService: awilix.asValue(new GetCarsService(new GetCarsHttpService()))
    });

return container;
}