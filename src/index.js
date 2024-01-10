import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card from './Components/Card';
import { info } from './Data/info';
import Cardinfo from './pages/Cardinfo';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cards/:nome",
    element: <Cardinfo/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
