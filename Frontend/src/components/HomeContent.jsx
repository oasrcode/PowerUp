import { useNavigate } from "react-router-dom";

import { UserAuth } from "../Context/AuthContext";
export function HomeContent() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-[85%] items-center justify-center">
      <div className="text-center">
        <h2 className="text-neutral-100 text-4xl font-bold font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
          Mide y Controla tu{" "}
        </h2>
        <h2 className="text-red-700 font-extrabold drop-shadow-[0_4px_4px_rgba(0,0,0,1)] text-7xl font-serif">
          {" "}
          Potencial
        </h2>
        {user ? (
          <>
            {" "}
            <button
              className="mt-10 px-6 py-4 bg-red-700 text-gray-900  rounded-md font-serif capitalize text-2xl font-bold shadow-md shadow-gray-900 hover:translate-y-[0.5px] hover:bg-slate-200 hover:text-red-700"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </>
        ) : (
          <button
            className="mt-10 px-6 py-4 bg-red-700 text-gray-900  rounded-md font-serif capitalize text-2xl font-bold shadow-md shadow-gray-900 hover:translate-y-[0.5px] hover:bg-slate-200 hover:text-red-700"
            onClick={() => navigate("/signup")}
          >
            Comenzar
          </button>
        )}
      </div>
    </div>
  );
}
