import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DetailsProduct from './components/component_Phuc/DetailsProduct';
import Product from './components/component_Phuc/Product';
// import ReactDOM from 'react-dom';
// import BrowserRouter from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Products/:productId",
    element: <DetailsProduct />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
