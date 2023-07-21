import { CarsTable } from "@Car/Ui";
import { ContainerContext, GET_CARS_SERVICE } from "@Shared/Infrastructure";
import { useContext } from "react";

export const CarsPage = () => {
    const containerCtx = useContext(ContainerContext);
    const getCarsService = containerCtx.resolve(GET_CARS_SERVICE);
    
    console.log(getCarsService.getCars());
    
    return <>
        <CarsTable />
    </>
}