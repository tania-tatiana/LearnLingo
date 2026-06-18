import { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  logIn,
  logOut,
  registerUser,
  subscribeToAuthChanges,
} from "../../services/auth";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setIsLoading(false);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, isLoading, registerUser, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
