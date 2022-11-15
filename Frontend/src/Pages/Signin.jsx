import image from "../assets/gym.jpg";
import { LoginForm } from "../components/LoginForm";
import { Quote } from "../components/Quote";

export function Signin() {
  return (
    <div className="flex w-full h-screen">
      <div className=" flex flex-col xl:flex-row 2xl:w-[50%] xl:w-[60%] lg:w-[80%] w-[90%] lg:flex-row  mx-auto h-[80%] my-auto xl:justify-between ">
        <div className="hidden lg:flex w-full h-full flex-col">
          <Quote/>
        </div>
        <LoginForm/>
      </div>
    </div>
  );
}
