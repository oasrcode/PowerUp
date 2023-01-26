import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
export function Protected({ children }) {
  const { user } = UserAuth();
  const value = user == null ? false : true;

  if (value == false) {
    return <Navigate to={"/"} replace></Navigate>;
  } else {
    return children;
  }
}
