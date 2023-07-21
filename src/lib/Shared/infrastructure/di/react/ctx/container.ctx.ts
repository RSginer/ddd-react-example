import { AwilixContainer } from "awilix";
import { createContext } from "react";
import { ContainerRegisteredServices, createDIContainer } from "../../di";

export const ContainerContext = createContext<AwilixContainer<ContainerRegisteredServices>>(
    createDIContainer()
);