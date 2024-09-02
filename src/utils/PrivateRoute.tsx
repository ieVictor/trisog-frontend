import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/userHooks';

export function PrivateRoute() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/" />
}
