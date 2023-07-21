import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CarsPage } from '@Car/Feature';
import { ContainerContext, createDIContainer } from '@Shared/Infrastructure';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CarsPage />,
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
