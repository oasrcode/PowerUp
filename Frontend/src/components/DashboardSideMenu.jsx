import { useState } from "react";
import { CgHome } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export function DashBoardSideMenu() {
  const [page, setPage] = useState("dashboard");
  const { SignOut } = UserAuth();
  return (
    <div className="hidden lg:flex flex-col w-96 h-screen bg-neutral-900 shadow-lg shadow-black justify-between">
      <div className="flex flex-col items-center gap-10">
        <div onClick={()=>setPage("dashboard")}>
          <Link to="/dashboard/">
            <h1 className="text-4xl font-bold font-serif  text-white shadow-black drop-shadow-md lg:ml-10 pt-14 cursor-pointer">
              Power<span className="text-red-700 font-bold font-serif">Up</span>
            </h1>
          </Link>
        </div>

        <div className=" flex flex-col space-y-14 w-full">
          <ul className=" flex flex-col space-y-14 w-full">
            <li
              className={
                page == "dashboard"
                  ? "flex flex-row  items-center justify-center  text-neutral-900  font-serif text-lg font-bold border-b-4  hover:text-neutral-900 bg-neutral-50 hover:border-b-4 border-red-700"
                  : "flex flex-row items-center justify-center gap-4 text-neutral-50  font-serif text-lg font-bold  border-b-4  border-neutral-900  hover:bg-neutral-700"
              }
              onClick={() => setPage("dashboard")}
            >
              <Link to="/dashboard/">
                <div className=" flex flex-row px-24 py-4 gap-4 items-center">
                  <CgHome size={20} />
                  Dashboard
                </div>
              </Link>
            </li>

            <li
              className={
                page == "lifts"
                  ? "flex flex-row items-center justify-center gap-4 text-neutral-900  font-serif text-lg font-bold border-b-4  hover:text-neutral-900 bg-neutral-50 hover:border-b-4 border-red-700"
                  : "flex flex-row items-center justify-center gap-4 text-neutral-50  font-serif text-lg font-bold  border-b-4  border-neutral-900  hover:bg-neutral-700"
              }
              onClick={() => setPage("lifts")}
            >
              <Link to="/dashboard/lifts">
                <div className=" flex flex-row px-24 py-4 gap-4 items-center">
                  <GiWeightLiftingUp size={20} />
                  Levantamientos
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="pb-20">
        <li
          className="flex flex-row cursor-pointer items-center justify-center gap-4  text-white font-serif text-lg font-bold py-2 hover:bg-neutral-700"
          onClick={() => SignOut()}
        >
          <Link to="/">
            <div className=" flex flex-row px-20 py-1 gap-4 items-center">
              <ImExit size={20} />
              Salir
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
