import { SigninForm } from "../components/SigninForm";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-neutral-900">
      <div className="flex flex-col overflow-auto lg:h-3/4 w-96  lg:bg-white lg:rounded-lg self-center mx-auto">
        <SigninForm/>
      </div>
    </div>
  );
}
