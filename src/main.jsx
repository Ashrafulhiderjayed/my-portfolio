import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
      style={{ overflowX: 'hidden', minHeight: '100vh' }}
    >
      <div className='mx-auto max-w-screen-2xl'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
