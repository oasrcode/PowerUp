import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
export function RedirectToDashboard({ children }) {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to={"/dashboard"} replace></Navigate>;
  } else {
    return children;
  }
}