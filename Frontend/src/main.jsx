import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../src/assets/css/tailwind.css'
import '../src/assets/css/fontPoppins.css'
import HomePage from './pages/home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
