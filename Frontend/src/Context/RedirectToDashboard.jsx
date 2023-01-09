import { Navigate} from "react-router-dom";
import { UserAuth } from "./AuthContext";
export function RedirectToDashboard({ children }) {
  const { user } = UserAuth();
  const value = user == null ? false : true;

  //definelo como falso por defecto para que se quede hasta que user tenga valor
  if (value == true) {
    return <Navigate to={"/dashboard"} replace></Navigate>;
  } else {
    return children;
  }
}