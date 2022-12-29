import { BsPersonCircle, BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export function Home() {
  const { user, SignOut } = UserAuth();
  const navigate = useNavigate();

  async function HandleLogOut() {
    await SignOut();
  }
  console.log(user);

  return (
    <div className="flex flex-col max-w-full h-screen bg-home-bg bg-no-repeat bg-cover bg-center bg-fixed  justify-between ">
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
            <BsPersonCircle className="flex text-white" size={30} />
            <p className="hidden md:block">
              {user ? "Cerrar Sesión" : "Iniciar Sesión"}
            </p>
          </button>
        </div>
      </header>

      <div className="flex flex-col w-full h-[85%] items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold">Frase primero</h2>
          <h2 className="text-red-700 font-extrabold border-dashed border-white text-7xl">
            {" "}
            Frase segunda
          </h2>
          <button
            className="mt-10 px-6 py-4 bg-red-700 text-gray-900  rounded-md font-serif capitalize text-2xl font-bold shadow-md shadow-gray-900 hover:translate-y-[0.5px] hover:bg-slate-200 hover:text-red-700"
            onClick={() => navigate("/signup")}
          >
            Comenzar
          </button>
        </div>
      </div>
      <div className="flex  w-full h-10 items-center justify-center space-x-2 bg-neutral-900">
        <BsGithub className="text-gray-50" size={30} />
        <p className="font-mono font-semibold text-gray-50">oasrcode</p>
      </div>
    </div>
  );
}
