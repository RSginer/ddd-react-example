import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CarsPage } from '@Car/Feature';
import { ContainerContext, createDIContainer } from '@Shared/Infrastructure';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CarsPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContainerContext.Provider value={createDIContainer()}>
      <RouterProvider router={router} />
    </ContainerContext.Provider>
  </React.StrictMode>,
)
