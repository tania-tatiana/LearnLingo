import { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
