import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TourPackage from './pages/TourPackage/index.tsx'
import TourDetails from './pages/TourDetails/index.tsx'
import { TourModel } from './models/tourModel.ts'
import Home from './pages/Home/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/tours",
        element: <TourPackage/>,
      },
      {
        path: "/tours/:id",
        element: <TourDetails data={TourModel.data}/>,
      },
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
