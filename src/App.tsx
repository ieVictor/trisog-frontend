import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import './styles/App.css';
import Modal from './components/Modal';
import { NextUIProvider } from '@nextui-org/react';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <NextUIProvider locale="en-GB" className="flex flex-col relative">
        <ModalProvider>
          <Navigation />
          <Modal />
          <Outlet />
        </ModalProvider>
    </NextUIProvider>
  );
}

export default App;
