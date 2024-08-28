import { getAuth, onAuthStateChanged, User as FireBaseUser, Auth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import userService from "../services/api/userService";
import { AxiosResponse } from "axios";
import { User } from "../types/UserType";

type AuthContextProps = {
  user: FireBaseUser | null;
  auth: Auth;
  profile: AxiosResponse<User> | null;
}

type UserProviderProps = {
  children: React.ReactNode
}
export const AuthContext = 
  createContext<AuthContextProps | null>(null);

export function UserProvider(props: UserProviderProps) {
  const auth = getAuth();
  const [user, setUser] = useState<FireBaseUser | null>(null);
  const [profile, setUserProfile] = useState<AuthContextProps['profile'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const U = onAuthStateChanged(
      auth,
      async (currentUser: FireBaseUser | null) => {
        if (currentUser) {
          setUser(currentUser);
          const profile = await userService.getUserById(currentUser.uid);
          setUserProfile(profile);
        }
        else setUser(null);
        setLoading(false);
      }
    )

    return U;
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, auth, profile }}>
      {!loading && props.children}
    </AuthContext.Provider>
  )
}