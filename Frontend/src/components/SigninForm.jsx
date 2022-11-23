import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {TiArrowBack}from 'react-icons/ti'
import { UserAuth } from "../Context/AuthContext";
export function SigninForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { googleSignIn, signIn,user } = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function ErrorAlert(){
    return(<div className="flex w-full h-14 bg-red-300 items-center px-4 border-2 border-red-800 font-semibold"> 
    <p className="text-red-700">Error +{error}</p>
    </div>)
  }

  /*Hacer ruta protegida para solo entrar si no estas logeado lo mismo con la pagina de registro*/ 
  useEffect(()=>{
   user ? navigate("/") : null
  },[user])

  async function HandleSummit(e) {
    e.preventDefault();
    try {
      
      await signIn(email, password);
     
    } catch (err) {
    
      setError(err.message);
    }
   
  }

  async function handleGoogleLogin() {
    try {
      await googleSignIn();
 
    } catch (err) {
      
      setError(err.message);
    }
   
  }

  return (
    <div className="flex flex-col w-full h-full  text-black  pt-10 justify-evenly ">
       <p className="text-center font-bold text-2xl">Bienvenido</p>
       <div className="flex flex-row space-x-2 ">
          <p className="pl-3">¿Aun no tienes cuenta?</p>
          <span
            className="font-bold hover:text-blue-900"
            onClick={() => navigate("/signup")}
          >
            registrate
          </span>
        </div>

       {error? (<div className="flex w-full h-14 bg-red-300 items-center px-4 border-2 border-red-800 font-semibold"> 
    <p className="text-red-700">{error}</p>
    </div>): null}

      
      <form onSubmit={HandleSummit}>
        <div className="flex flex-col">
          
          <label className="text-black p-4 font-bold">Email</label>
          <input
            className="p-4 m-3 text-gray-700 rounded-md"
            type={"email"}
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-black p-4 font-bold">Contraseña</label>
          <input
            className="p-4 m-3 text-gray-700 rounded-md"
            type={"password"}
            placeholder="contraseña"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col mt-7">
          <button
            className="p-3 mx-3 rounded-md text-lg font-bold bg-slate-100 hover:bg-slate-300 text-black shadow-sm shadow-black"
            type={"submit"}
          >
            Continuar
          </button>
        </div>
      </form>

      <div className="flex flex-row justify-between items-center mx-2">
        <hr className="border-1 border-gray-500 w-full" />
        <p className="w-full text-center"> o inicia con</p>
        <hr className="mr-2 border-1 border-gray-600 w-full" />
      </div>

      <div className="flex flex-row items-center self-center space-x-2">
        <button
          className="p-4 text-lg font-bold bg-slate-50 shadow-sm shadow-black text-black rounded-full hover:bg-slate-300"
          onClick={() => handleGoogleLogin()}
        >
          <FcGoogle size={25} />
        </button>
        <p className="font-bold text-xl">Google</p>
      </div>
    </div>
  );
}
