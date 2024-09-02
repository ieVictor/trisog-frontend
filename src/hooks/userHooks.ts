import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

export const useUser = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error ('useUser must be used inside a UserProvider!');
  return context;
}