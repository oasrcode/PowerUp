import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { Loading } from "../components/Loading";
export function DashBoard() {
  const { SignOut, user } = UserAuth();

  const [release, setRelease] = useState(false);

  const [page, setPage] = useState("dashboard");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-full h-screen bg-neutral-300">
      <div className="hidden lg:flex flex-col w-96 h-screen bg-neutral-900 shadow-lg shadow-black">
        <div className="flex flex-col items-center gap-10">
          <h1
            className="text-4xl font-bold font-serif  text-white shadow-black drop-shadow-md lg:ml-10 pt-14 cursor-pointer"
            onClick={() => {
              navigate("/dashboard/"), setPage("dashboard");
            }}
          >
            Power<span className="text-red-700 font-bold font-serif">Up</span>
          </h1>

          <div className=" flex flex-col space-y-14 w-full">
            <button
              className={
                page == "dashboard"
                  ? "flex flex-row items-center justify-center gap-4 text-neutral-900  font-serif text-lg font-bold border-b-4 py-2 hover:text-neutral-900 bg-neutral-50 hover:border-b-4 border-red-700"
                  : "flex flex-row items-center justify-center gap-4 text-neutral-50  font-serif text-lg font-bold  border-b-4 py-2 border-neutral-900  hover:bg-neutral-700"
              }
              s
              onClick={() => {
                navigate("/dashboard/"),
                  setPage("dashboard"),
                  setRelease(false);
              }}
            >
              <CgHome size={20} /> Dashboard{" "}
            </button>
            <button
              className={
                page == "lifts"
                  ? "flex flex-row items-center justify-center gap-4 text-neutral-900  font-serif text-lg font-bold border-b-4 py-2 hover:text-neutral-900 bg-neutral-50 hover:border-b-4 border-red-700"
                  : "flex flex-row items-center justify-center gap-4 text-neutral-50  font-serif text-lg font-bold  border-b-4 py-2 border-neutral-900  hover:bg-neutral-700"
              }
              onClick={() => {
                navigate("lifts"), setPage("lifts"), setRelease(false);
              }}
            >
              <GiWeightLiftingUp size={20} /> Levantamientos{" "}
            </button>
          </div>
        </div>

        <div className=" flex flex-col space-y-14 w-full h-full  justify-end pb-20">
          <button
            onClick={() => SignOut()}
            className="flex flex-row items-center justify-center gap-4   font-sans text-white text-lg py-2 hover:bg-neutral-700"
          >
            <ImExit size={20} /> Salir
          </button>
        </div>
      </div>

      <div className=" lg:hidden flex w-full max-w-full h-20 bg-black items-center justify-between">
        <h1
          className="pl-4 text-4xl font-bold font-serif  text-white shadow-black drop-shadow-md cursor-pointer"
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

      <div className=" relative flex flex-col w-full h-full overflow-hidden bg-neutral-200">
        {/*Overflow-hidden*/}
        <div
          className={
            release
              ? "z-10 fixed flex flex-col left-0 top-23 w-full h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-center space-y-14 p-10"
              : "z-10 fixed  flex flex-col left-[-100%] top-23  w-full h-full ease-in-out duration-500 text-center space-y-14 p-10 "
          }
        >
          <button
            className="w-11/12 md:w-1/2 self-center text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => {
              navigate("/dashboard/"), setRelease(false);
            }}
          >
            {" "}
            Dashboard{" "}
          </button>
          <button
            className="w-11/12 md:w-1/2 self-center text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => {
              navigate("lifts"), setRelease(false);
            }}
          >
            {" "}
            Levantamientos{" "}
          </button>

          <button
            className="w-11/12 md:w-1/2 self-center text-white text-xl bg-red-700 rounded-md py-2 hover:opacity-60"
            onClick={() => SignOut()}
          >
            {" "}
            Salir{" "}
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
