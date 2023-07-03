import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto max-w-7xl' style={{overflowX: 'hidden'}}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
