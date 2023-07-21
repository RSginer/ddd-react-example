import { createDIContainer } from "../../../Shared/infrastructure/di";

const container = createDIContainer();

export const useDIContainer = () => {
    return container;
}
