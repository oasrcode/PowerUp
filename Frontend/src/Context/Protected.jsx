import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
export function Protected({ children }) {
  const { user } = UserAuth();
  const value = user == null ? false : true;
  if (value == false) {
    return <Navigate to={"/"} replace></Navigate>;
  } else {
    return children;
  }
}
