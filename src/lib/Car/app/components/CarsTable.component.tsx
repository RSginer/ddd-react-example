import { GET_CARS_SERVICE } from "../../../Shared/intrastructure/di/di";
import { useDIContainer } from "../../../Shared/intrastructure/di/react/hooks/useDIContainer";
import { GetCarsService } from "../../domain/service/GetCarsService";

export const CarsTable = () => {
    const container = useDIContainer();
    const getCarsService = container.resolve<GetCarsService>(GET_CARS_SERVICE);


    return <></>
}