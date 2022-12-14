import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
export function Protected({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to={"/"} replace></Navigate>;
  } else {
    return children;
  }
}
