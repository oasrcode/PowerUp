import { BsPersonCircle, BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export function NavBar() {
  const { user, SignOut } = UserAuth();
  const navigate = useNavigate();

  async function HandleLogOut() {
    await SignOut();
  }

  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between items-center h-24 max-w-full px-4 tracking-wide cursor-pointer bg-slate-600">
      <h1
        className="text-4xl font-medium  text-black shadow-black red-900 drop-shadow-md"
        onClick={() => navigate("/")}
      >
        Jacked{" "}
      </h1>

      <ul className="hidden lg:flex flex-row items-center justify-center space-x-10">
        <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200">
          <Link to="lifts">Levantamientos</Link>
        </li>
        
        <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200">
          <Link to="profile">Mi perfil</Link>
        </li>
        <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200">
          <Link to="mificha">Mi ficha</Link>
        </li>
      </ul>
       <div
        className="flex flex-row space-x-4 items-center "
        onClick={user ? () => SignOut() : () => navigate("/signin")}
      >
        <BsPersonCircle size={30} />
        <p className=" hidden sm:block text-black">
          {user ? "Cerrar Sesión" : "Iniciar Sesión"}
        </p>
      </div> 
      


    </header>
  );
}
