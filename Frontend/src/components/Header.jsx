import { useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import { UserAuth } from "../Context/AuthContext";

export function Header() {
  const { user, SignOut } = UserAuth();
  const navigate = useNavigate();
  async function HandleLogOut() {
    await SignOut();
  }
  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between items-center h-20 max-w-full px-4 tracking-wide cursor-pointer bg-neutral-900 border-b-8 border-red-700">
      <h1
        className="text-4xl font-bold font-serif  text-white shadow-black red-900 drop-shadow-md lg:ml-10"
        onClick={() => navigate("/")}
      >
        Power<span className="text-red-700 font-bold font-serif">Up</span>
      </h1>

      <div className="flex flex-row space-x-4 items-center cursor-pointer lg:mr-10">
        <button
          className="flex sm:text-lg text-white font-serif px-8 py-2 hover:opacity-60 gap-2"
          onClick={user ? HandleLogOut : () => navigate("/signin")}
        >
          {user ? (
            <>
              <BsFillPersonFill className="text-white" size={30} />
              <p className="hidden md:block">Cerrar Sesión</p>{" "}
            </>
          ) : (
            <>
              <BsPerson className="text-white" size={30} />
              <p className="hidden md:block">Iniciar sesión</p>{" "}
            </>
          )}
        </button>
      </div>
    </header>
  );
}
