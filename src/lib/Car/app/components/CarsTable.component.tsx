import { GET_CARS_SERVICE } from "../../../Shared/intrastructure/di";
import { GetCarsService } from "../../domain/service/GetCarsService";
import { useDIContainer } from "../hooks/useDIContainer";

export const CarsTable = () => {
    const container = useDIContainer();
    const getCarsService = container.resolve<GetCarsService>(GET_CARS_SERVICE);


    return <></>
}