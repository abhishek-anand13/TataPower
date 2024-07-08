import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './Pages/Registration';
import { LoginForm } from './Components/LoginForm/LoginForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />, // Set LoginForm as the default route
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
