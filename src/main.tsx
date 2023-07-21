import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { createDIContainer } from './di.ts';
import './index.css';

const container = createDIContainer();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
