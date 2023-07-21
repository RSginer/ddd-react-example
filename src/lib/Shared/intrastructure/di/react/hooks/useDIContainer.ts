import { createDIContainer } from "../../di";

const container = createDIContainer();

export const useDIContainer = () => {
    return container;
}
