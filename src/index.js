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
import AddProduct from './components/component_Phuc/AddProduct';

import Login from './components/component_dinh/LoginSignup/login';
import Signup from './components/component_dinh/LoginSignup/signup';
import CartPayment from './components/component_dinh/cart-payment/cartpayment';
import AdminPage from './components/component_Phuc/AdminPage';

import ManageProduct from './components/component_Phuc/ManageProduct';
import ManageRequest from './components/component_Phuc/ManageRequest';
import ManageOrder from './components/component_Phuc/ManageOrder';
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


  {
    path: "/Admin",
    element: <AdminPage />,
    children: [{
      path: "/Admin/ManageProduct",
      element: <ManageProduct />,
      children: [{
        path: "/Admin/ManageProduct/AddProduct",
          element: <AddProduct />,
        }]
    },
    {
      path: "/Admin/ManageRequest",
      element: <ManageRequest />,
    },
    {
      path: "/Admin/ManageOrder",
      element: <ManageOrder />,
      // children: [{
      //   path: "/Admin/ManageOrder/:orderId",
      //   element: <DetailsProduct />,
      // }]
    }]
  },


{
  path: "/login",
    element: <Login />
},
{
  path: "/signup",
    element: <Signup />
},
{
  path: "/cart&payment",
    element: <CartPayment />
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
