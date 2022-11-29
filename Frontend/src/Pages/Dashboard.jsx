import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

export function DashBoard() {
  return <div className="flex flex-col w-full max-w-full h-screen">

    {/* <div className="sticky top-0 flex flex-row w-full lg:w-10/12 h-24 bg-slate-400 mx-auto lg:rounded-b-lg lg:shadow-gray-800 lg:shadow-lg lg:items-center lg:justify-center lg:space-x-5">
    
        <ul className="hidden lg:flex flex-row items-center justify-center space-x-10">
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app">Inicio</Link></li>
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app/lifts">Levantamientos</Link></li>
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app/progress">Progreso</Link></li>
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app/imc">IMC</Link></li>
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app/bodyfat">Grasa Corporal</Link></li>
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app/dailycals">Calorias diarias</Link></li>
          <li className=" bg-slate-50 font-semibold text-black px-6 py-2 rounded-md hover:bg-slate-200"><Link to="/app/profile">Mi perfil</Link></li>
        </ul>


    </div> */}
    <div className="flex flex-col w-full h-full  lg:flex-row lg:w-3/4 lg:h-3/4 bg-gray-50 mx-auto my-auto rounded-lg shadow-lg shadow-gray-800">
      <Outlet/>
    </div>
  </div>;
}
