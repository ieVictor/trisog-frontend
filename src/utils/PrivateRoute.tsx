import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/userHooks';
import Navigation from '../components/Navigation';
import Modal from '../components/Modal';

export function PrivateRoute() {
  const { user } = useUser();
  return user ? (
    <>
      <Navigation />
      <Modal />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}
