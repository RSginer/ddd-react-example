import { createDIContainer } from "../../../Shared/intrastructure/di";

const container = createDIContainer();

export const useDIContainer = () => {
    return container;
}
