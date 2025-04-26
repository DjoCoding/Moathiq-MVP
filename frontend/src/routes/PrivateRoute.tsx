import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return children;
  return <Navigate to="/auth/login" />;
}
