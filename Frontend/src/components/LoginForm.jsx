import { FcGoogle } from "react-icons/fc";
export function LoginForm() {
  return (
    <div className="flex flex-col  w-full h-full bg-slate-50 bg-inherit border-[9px] border-white text-white ">
      <p className="text-center font-serif font-bold text-2xl pt-14">Login</p>
      <div className="pt-16">
      <form>
        <div className="w-full flex flex-col justify-center space-y-3 px-10 ">
          <label className="pl-1 text-gray-50 font-serif" for="email">
            Email
          </label>
          <input
            className="px-4 py-3 font-serif text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-shredded "
            type={"email"}
            id="email"
            placeholder="username@gmail.com"
          ></input>
        </div>
        <div className="w-full flex flex-col justify-center pt-6 space-y-3 px-10">
          <label className="pl-1 text-gray-50 font-serif" for="password">
            Password
          </label>
          <input
            className="px-4 py-3 font-serif text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-shredded "
            type={"password"}
            id="password"
            placeholder="password"
          ></input>
        </div>
        <div className="w-full flex flex-col justify-center pt-6 space-y-3 px-10">
          <button
            className="w-full flex justify-center bg-shredded  hover:bg-pink-800 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-200 hover:scale-95"
            type={"submit"}
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center space-x-2 my-5">
        <span className="h-px w-16 bg-gray-100"></span>
        <span className="text-gray-300 font-normal">or</span>
        <span className="h-px w-16 bg-gray-100"></span>
      </div>
      <div className="w-full flex flex-col justify-center sticky top-0 px-10">
      <button
            className="w-full flex justify-center  bg-white  hover:bg-gray-100 text-gray-900 shadow-gray-50 drop-shadow-lg  p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-200 hover:scale-95"
            type={"submit"}
          >
            <FcGoogle/><span className="pl-4 text-md"> Google</span>
          </button>
      </div>
      </div>
    </div>
  );
}
