import { NextUIProvider } from '@nextui-org/react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation'
import Modal from './components/Modal';
import Login from './components/Login';
import './styles/App.css'

function App() {
  const { pathname } = useLocation();
  const [viewModal, setViewModal] = useState<boolean>(false);

  useEffect(() => {
    const scrollPosition = window.scrollY

    if(viewModal) {
      document.body.style.inset = `-${scrollPosition}px 0px 0px`
      document.documentElement.style.scrollbarGutter = "stable"
      document.documentElement.style.width = "100%"
      document.body.style.position = "fixed"
    } 
    else if (!viewModal && document.body.style.position == "fixed") {
      const scrollPosition = Math.abs(parseInt(document.body.style.top, 10))
      document.body.style.removeProperty("inset");
      document.body.style.removeProperty("scrollbarGutter");
      document.body.style.removeProperty("position");
      document.documentElement.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    }
  }, [viewModal])

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "auto"});
  }, [pathname])

  return (
    <>
      <NextUIProvider 
        locale='en-GB' 
        className='flex flex-col relative'
      >
        <Navigation onClickLogin={() => setViewModal(true)}/>
        {viewModal && 
          <Modal 
            modalTitle='Log in or sign up' 
            onCancel={() => setViewModal(false)}
          >
            <Login onSubmit={() => setViewModal(false)}/>
          </Modal>
        }
        <Outlet/>
      </NextUIProvider>
    </>
  )
}

export default App
