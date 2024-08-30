import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TourPackage from './pages/TourPackage/index.tsx'
import TourDetails from './pages/TourDetails/index.tsx'
import Home from './pages/Home/index.tsx'
import { UserProvider } from './contexts/UserContext.tsx'
import { ToastContainer } from 'react-toastify'
import { PrivateRoute } from './utils/PrivateRoute.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/> },
      {path: "/tours", element: <TourPackage/> },
      {
        path: "/tours/:id",
        element: <PrivateRoute/>,
        children: [
          {path: "/tours/:id", element: <TourDetails/> }
        ],
      }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} style={{ zIndex: 999999 }}/>
    </UserProvider>
  </StrictMode>,
)
