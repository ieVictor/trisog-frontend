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
import Error from './pages/Error/index.tsx'
import Destination from './pages/Destination/index.tsx'
import DestinationDetails from './pages/DestinationDetails/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home/> },
      {
        path: "/tours", 
        element: <PrivateRoute/>, 
        children: [
          { path: "/tours", element: <TourPackage/>},
          { path: "/tours/:id", element: <TourDetails/>}
        ]
      },
      {
        path: "/destination",
        element: <PrivateRoute/>,
        children: [
          { path: "/destination", element: <Destination/> },
          { path: "/destination/:id", element: <DestinationDetails/> }
        ],
      },
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
