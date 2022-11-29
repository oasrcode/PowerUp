import { useEffect } from "react";
import { BsPersonCircle,BsGithub } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { UserAuth } from "../Context/AuthContext";


export function Home() {
  const { user, SignOut } = UserAuth();
  const navigate = useNavigate();

 
  async function HandleLogOut() {
    await SignOut();
  }

 
  return (
    <div className="flex flex-col max-w-full h-screen">
      {/* <header className="sticky top-0 z-10 flex flex-row justify-between items-center h-24 max-w-full px-4 tracking-wide cursor-pointer bg-slate-50">
        <h1
          className="text-4xl font-medium  text-black shadow-black red-900 drop-shadow-md"
          onClick={() => navigate("/")}
        >
          Jacked{" "}
        </h1>
        <div
          className="flex flex-row space-x-4 items-center cursor-pointer"
          onClick={user ? HandleLogOut:() => navigate("/signin")}
        >
          <BsPersonCircle size={30} />
          <p className="block text-black">{user ? "Cerrar Sesión":"Iniciar Sesión"}</p>
        </div>
      </header> */}
      {/* <div className="flex flex-col w-full h-[85%] bg-slate-600 ">
        <button className="px-6 py-4 bg-white text-black mx-auto my-auto rounded-lg font-serif font-bold shadow-md shadow-gray-900 hover:bg-slate-200" onClick={()=>navigate("/signup")}>Comenzar</button>
      </div>
      <div className="flex w-full h-[5%] items-center justify-center space-x-2">
        <BsGithub size={30}/>
        <p>oasrcode</p>
      </div> */}
      <NavBar/>
      <Outlet/>

    </div>
  );
}
