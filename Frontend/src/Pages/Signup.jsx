import { SignupForm } from "../components/SignupForm";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-neutral-900">
      <div className="flex flex-col overflow-auto  lg:h-3/4 w-96 bg-black lg:bg-white lg:rounded-lg self-center mx-auto ">
        <SignupForm/>
      </div>
    </div>
  );
}
