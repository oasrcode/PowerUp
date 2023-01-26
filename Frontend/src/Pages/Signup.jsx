import { SignupForm } from "../components/SignupForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
export function Signup() {
  const navigate = useNavigate();
  const { user } = UserAuth();
  useEffect(() => {
    if(user){
      navigate("/");
    }
   
  }, [user]);
  return (
    <div className="flex w-full h-screen bg-black lg:bg-neutral-900">
      <div className="flex flex-col w-full  h-screen overflow-auto xl:h-[90%] 2xl:h-4/6  md:w-9/12 lg:w-96 bg-black lg:bg-white lg:rounded-lg self-center mx-auto ">
        <SignupForm />
      </div>
    </div>
  );
}
