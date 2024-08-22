import { NextUIProvider } from '@nextui-org/react'
import TourPackage from './pages/TourPackage'
import './styles/App.css'

function App() {

  return (
    <>
      <NextUIProvider>
        <TourPackage/>
      </NextUIProvider>
    </>
  )
}

export default App
