import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import MyCart from './pages/MyCart/MyCart.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import UpdateProduct from './pages/updateProduct/UpdateProduct.jsx';
import BrandProduct from './pages/Home/BrandProduct/BrandProduct.jsx';
import BrandName from './pages/Home/BrandName/BrandName.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('/data.json')
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
       
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/detail/:id',
        element:<PrivateRoute> <ProductDetail></ProductDetail></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      
      {
        path: '/brandName',
        element : <BrandName></BrandName>,
        loader:() => fetch('/data.json')

      },
      {
        path: '/brandName/:brandName',
        element: <BrandProduct></BrandProduct>,
        loader:() => fetch('http://localhost:5000/product')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
