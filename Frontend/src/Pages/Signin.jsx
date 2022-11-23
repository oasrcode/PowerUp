import { SigninForm } from "../components/SigninForm";
import {TiArrowBack}from 'react-icons/ti'
import { useNavigate } from "react-router-dom";

export function Signin() {

  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-slate-100">
       <TiArrowBack className="sm:hidden fixed t-0 l-0 hover:text-blue-800 cursor-pointer"size={30} onClick={()=>navigate("/")}/>
    <div className=" flex flex-col xl:flex-row xl:w-[50%] lg:w-[60%] w-[85%] lg:flex-row h-[90%] sm:h-[80%] mx-auto my-auto shadow-md shadow-black rounded-xl">
      
      <div className="hidden lg:flex w-full h-full bg-slate-300 my-auto mx-auto flex-col rounded-l-md ">
        <TiArrowBack className="fixed t-0 l-0 hover:text-blue-800 cursor-pointer"size={30} onClick={()=>navigate("/")}/>
      </div>
        <SigninForm />
      </div>
    </div>
  );
}
