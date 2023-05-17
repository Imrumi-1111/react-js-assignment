import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Login from '../src/components/pages/login'
import  About from '../src/components/pages/about'
import  Contact from '../src/components/pages/contact'
import  Home from '../src/components/pages/home'
import  Projects from '../src/components/pages/projects'
import  Register from '../src/components/pages/register'
import Option from '../src/components/section/option'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },

  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/about',
    element: <About/>
  },

  {
    path: '/contact',
    element: <Contact/>
  },

  {
    path: '/option',
    element: <Option/>
  },

  {
    path: '/projects',
    element: <Projects/>
  },

  {
    path: '/register',
    element: <Register/>
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
