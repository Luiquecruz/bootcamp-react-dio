import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider }from 'react-router-dom'

import App from './App';
import Restricted from './Restricted';
import ErrorPage from './ErrorPage';

import { Login, Register } from './pages/auth';
import { HomeDefault, HomeUser } from './pages/Home'

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeDefault />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '/minha-conta',
    element: <Restricted />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/minha-conta',
        element: <HomeUser />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
