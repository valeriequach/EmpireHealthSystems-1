import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from "./error-page"
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, 
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About-Us",
          element: <About />,
        },
        {
          path: "/Services",
          element: <Services />,
        },
      ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
