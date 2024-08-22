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
import CRUDData from './components/component_Phuc/CRUDData';
import AddProduct from './components/component_Phuc/AddProduct';
import Login from './components/component_dinh/LoginSignup/login';
import Signup from './components/component_dinh/LoginSignup/signup';
import CartPayment from './components/component_dinh/cart-payment/cartpayment';
//import { CartProvider } from './components/component_dinh/Cart/CartContext';
// import ReactDOM from 'react-dom';
// import BrowserRouter from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Products",
    element: <Product />,
    children: [{
      path: "/Products/:productId",
      element: <DetailsProduct />,
    }]
  },
  // {
  //   path: "/Products/:productId",
  //   element: <DetailsProduct />,
  // },
  {
    path: "/shop-management",
    element: <CRUDData />,
  },
  {
    path: "/Admin/AddProduct",
    element: <AddProduct />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path:"/cart&payment",
    element: <CartPayment/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
//CONTEXT CHO CART ARRAY
/*ReactDOM.render(
  <CartProvider>
      <App />
  </CartProvider>,
  document.getElementById('root')
);*/


reportWebVitals();
