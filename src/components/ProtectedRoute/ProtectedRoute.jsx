import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return null;

  if (!user) return <Navigate to="/" replace />;

  return children;
}
