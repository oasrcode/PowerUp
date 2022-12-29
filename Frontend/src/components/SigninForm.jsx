import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export function SigninForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();



  async function HandleSummit(e) {
    e.preventDefault();
    try { 
      await signIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  }

  


  return (
    <div className="flex flex-col w-auto max-w-auto h-screen  text-red  pt-10 justify-evenly ">
       <p className="text-center font-bold text-2xl text-white lg:text-neutral-900">Bienvenido</p>
       <div className="flex flex-row space-x-2 ">
          <p className="pl-3 text-white lg:text-neutral-900">¿Aun no tienes cuenta?</p>
          <span
            className="font-bold text-white lg:text-black hover:text-red-700 hover:underline "
            onClick={() => navigate("/signup")}
          >
            registrate
          </span>
        </div>

       {error? (<div className="flex w-full h-14 bg-red-300 items-center px-4 border-2 border-red-800 font-semibold"> 
    <p className="text-red-700 z-10 float">{error}</p>
    </div>): null}

      
      <form onSubmit={HandleSummit}>
        <div className="flex flex-col">
          
          <label className="text-white lg:text-neutral-900 p-4 font-bold">Email</label>
          <input
            className="p-4 m-3 text-gray-700 rounded-md border-2 border-red-700"
            type={"email"}
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label className=" p-4 font-bold text-white lg:text-neutral-900">Contraseña</label>
          <input
            className="p-4 m-3 text-gray-700 rounded-md border-2 border-red-700"
            type={"password"}
            placeholder="contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          ></input>
        </div>
        <div className="flex flex-col mt-7">
          <button
            className="p-3 mx-3 rounded-md text-lg font-bold text-gray-50 bg-red-700 hover:opacity-60 shadow-sm shadow-black"
            type={"submit"}
          >
            Continuar
          </button>
        </div>
      </form>

    </div>
  );
}
