import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
export function DashBoard() {
const {SignOut} = UserAuth()

  const [release, setRelease] = useState(false);

  const navigate = useNavigate();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-full h-screen bg-neutral-300">
      <div className="hidden lg:flex flex-col w-96 h-screen bg-neutral-900 shadow-lg shadow-black">
        <div className="flex flex-col items-center gap-10">
          <h1
            className="text-4xl font-bold font-serif  text-white shadow-black drop-shadow-md lg:ml-10 pt-14 cursor-pointer"
            onClick={() => navigate("/dashboard/")}
          >
            Power<span className="text-red-700 font-bold font-serif">Up</span>
          </h1>

          {/* <ul className="w-9/12 text-center space-y-14">
            <li className="text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60">
              <Link to={"/dashboard/"}>Inicio</Link>
            </li>
            <li className="text-white text-xl bg-red-700 rounded-md  py-2 hover:opacity-60">
              <Link to={"lifts"}>Levantamientos</Link>
            </li>
            <li className="text-white text-xl bg-red-700 rounded-md  py-2 hover:opacity-60">
              <Link to={"lifts"}>Progreso</Link>
            </li>
            <li className="text-white text-xl bg-red-700 rounded-md  py-2 hover:opacity-60">
              <Link to={"lifts"}>Mis Datos</Link>
            </li>
          </ul> */}

          <div className=" flex flex-col space-y-14 w-full">
            <button
              className="flex flex-row items-center justify-center gap-4   font-sans text-white text-lg bg-neutral-900  py-2 hover:bg-neutral-700"
              onClick={() => navigate("/dashboard/")}
            >
              <CgHome size={20} /> Inicio{" "}
            </button>
            <button
            className="flex flex-row items-center justify-center gap-4   font-sans text-white text-lg bg-neutral-900  py-2 hover:bg-neutral-700"
              onClick={() => navigate("lifts")}
            >
              <GiWeightLiftingUp size={20} /> Levantamientos{" "}
            </button>
            <button onClick={()=>SignOut()}>Cerrar Sesión</button>
            
          </div>
        </div>
      </div>

      <div className=" lg:hidden flex w-full max-w-full h-20 bg-black items-center justify-between">
        <h1
          className="text-4xl font-bold font-serif  text-white shadow-black drop-shadow-md cursor-pointer"
          onClick={() => navigate("/dashboard/")}
        >
          Power<span className="text-red-700 font-bold font-serif">Up</span>
        </h1>
        <div
          className="flex w-20 h-20 cursor-pointer items-center justify-center text-white"
          onClick={() => setRelease(!release)}
        >
          {release ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </div>
      </div>

      <div className=" relative flex flex-col w-full h-full overflow-hidden bg-neutral-50">
        {/*Overflow-hidden*/}
        <div
          className={
            release
              ? "z-10 fixed flex flex-col left-0 top-23 w-full h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-center space-y-14 p-10"
              : "z-10 fixed  flex flex-col left-[-100%] top-23  w-full h-full ease-in-out duration-500 text-center space-y-14 p-10 "
          }
        >
          <button
            className="text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => navigate("/dashboard/")}
          >
            {" "}
            Inicio{" "}
          </button>
          <button
            className="text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => navigate("lifts")}
          >
            {" "}
            Levantamientos{" "}
          </button>
          <button
            className="text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => navigate("bodyfat")}
          >
            {" "}
            Calcular % Grasa{" "}
          </button>
          <button
            className="text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => navigate("dailycals")}
          >
            {" "}
            Calcular Calorias{" "}
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
