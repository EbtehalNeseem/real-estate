import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children, role }) {
  const { user, checking } = useAuth();

  if (checking) return <p className="p-10 text-lg">Checking authentication...</p>;

  if (!user) return <Navigate to="/auth" replace />;

  // ROLE CHECK (optional)
  if (role && user.user_metadata?.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
