import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/" replace state={{ fromProtected: true }} />;
  }

  return <Outlet />;
}
