import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CarPage, CarsPage } from '@Car/Feature';
import { ContainerContext, createDIContainer } from '@Shared/Infrastructure';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CarsPage />,
  },
  {
    path: '/car/:id',
    element: <CarPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContainerContext.Provider value={createDIContainer()}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContainerContext.Provider>
  </React.StrictMode>,
);
