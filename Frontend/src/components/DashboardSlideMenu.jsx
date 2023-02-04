import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
export function DashboardSlideMenu() {
  const [open, setOpen] = useState(false);
  const { SignOut } = UserAuth();
  return (
    <>
      <div className=" lg:hidden flex w-full max-w-full h-20 bg-neutral-900 border-b-8 border-red-700 items-center justify-between">
        <div>
          <Link to="/dashboard/">
            <h1 className="text-4xl font-bold font-serif  text-white shadow-black drop-shadow-md lg:ml-10 ">
              Power<span className="text-red-700 font-bold font-serif">Up</span>
            </h1>
          </Link>
        </div>

        <div
          className="flex w-20 h-20 cursor-pointer items-center justify-center text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </div>
      </div>

      <div
        className={
          open
            ? "z-10 fixed flex flex-col left-0 mt-20 w-full h-full  bg-neutral-900 ease-in-out duration-500 text-center space-y-14 p-10"
            : "z-10 fixed  flex flex-col left-[-100%] mt-20  w-full h-full ease-in-out duration-500 text-center space-y-14 p-10 "
        }
      >
        <ul className="flex flex-col  space-y-14">
          <li
            className="flex w-full h-14 bg-red-700 text-xl font-serif text-neutral-100 rounded-md items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <Link to="/dashboard/">
              <div className=" flex flex-row px-20 py-1 gap-4 items-center">
                Dashboard
              </div>
            </Link>
          </li>

          <li
            className="flex w-full h-14 bg-red-700 text-xl font-serif text-neutral-100 rounded-md items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <Link to="/dashboard/lifts">
              <div className=" flex flex-row px-20 py-1 gap-4 items-center">
                Levantamientos
              </div>
            </Link>
          </li>

          <li
            className="flex w-full h-14 bg-red-700 text-xl font-serif text-neutral-100 rounded-md items-center justify-center"
            onClick={() => {
              setOpen(false), SignOut();
            }}
          >
            <Link to="/">
              <div className=" flex flex-row px-20 py-1 gap-4 items-center">
                Salir
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
