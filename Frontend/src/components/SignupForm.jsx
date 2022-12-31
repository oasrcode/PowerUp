import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { ModalSignUp } from "./ModalSignUp";
export function SignupForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { createUser, user } = UserAuth();
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [newUser, setNewUser] = useState();



  async function HandleSummit(e) {
    e.preventDefault();
    try {
      await createUser(name, email, password).then(() => {
        setModal(true);
        const newUser = {};
        newUser.name = name;
        newUser.email = email;
        setNewUser(newUser);
      });
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <>
      {modal ? (
        <ModalSignUp prop={newUser} />
      ) : (
        <div className="flex flex-col w-full h-full justify-evenly">
          <p className="text-center font-bold text-2xl text-white lg:text-black">
            Crea tu cuenta
          </p>

          {error ? (
            <div className="flex w-full h-14 bg-red-300 items-center px-4 border-2 border-red-800 font-semibold">
              <p className="text-red-700 z-10 float">{error}</p>
            </div>
          ) : null}

          <form onSubmit={HandleSummit}>
            <div className="flex flex-col ">
              <label className="text-white lg:text-black p-4 font-bold">
                Usuario
              </label>
              <input
                className="p-4 m-3 border-2 border-red-700 text-gray-900 rounded-md"
                type={"text"}
                placeholder="nombre de usuario"
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-white lg:text-black p-4 font-bold">
                Email
              </label>
              <input
                className="p-4 m-3 border-2 border-red-700 text-gray-900 rounded-md"
                type={"email"}
                placeholder="email@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-white lg:text-black p-4 font-bold">
                Contraseña
              </label>
              <input
                className="p-4 m-3 border-2 border-red-700 text-gray-900 rounded-md"
                type={"password"}
                placeholder="contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
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
      )}
    </>
  );
}
