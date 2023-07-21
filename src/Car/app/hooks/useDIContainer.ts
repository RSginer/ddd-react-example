import { createDIContainer } from "../../infrastructure/di";

const container = createDIContainer();

export const useDIContainer = () => {
    return container;
}
