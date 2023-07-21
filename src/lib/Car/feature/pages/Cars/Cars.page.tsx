import { useContext } from 'react';

import { CarsTable } from '@Car/Feature';
import { ContainerContext, GET_CARS_SERVICE } from '@Shared/Infrastructure';
import { Header } from '@Shared/Ui';

export const CarsPage = () => {
    const containerCtx = useContext(ContainerContext);
    const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);

    return <>
        <Header />
        <CarsTable />
    </>
}