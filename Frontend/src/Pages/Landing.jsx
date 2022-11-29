import { useEffect } from "react";
import { BsPersonCircle, BsGithub } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export function Landing() {
  const { user, SignOut } = UserAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full h-[85%] bg-slate-200 ">
        <button
          className="px-6 py-4 bg-white text-black mx-auto my-auto rounded-lg font-serif font-bold shadow-md shadow-gray-900 hover:bg-slate-200"
          onClick={() => navigate("/signup")}
        >
          Comenzar
        </button>
      </div>
      <div className="flex w-full h-[5%] items-center justify-center space-x-2">
        <BsGithub size={30} />
        <p>oasrcode</p>
      </div>
    </>
  );
}
