import { useDIContainer } from "../hooks/useDIContainer";

export const CarsTable = () => {
    const container = useDIContainer();

    console.log(container.resolve('getCarsService'));

    return <></>
}