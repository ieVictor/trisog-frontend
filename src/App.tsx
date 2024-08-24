import { NextUIProvider } from '@nextui-org/react'
import './styles/App.css'
import TourDetails from './pages/TourDetails'
import { TourModel } from './models/tourModel'

function App() {

  return (
    <>
      <NextUIProvider locale='en-GB'>
        <TourDetails data={TourModel.data}/>
      </NextUIProvider>
    </>
  )
}

export default App
