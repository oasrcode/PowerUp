import { Quote } from '../components/Quote';
import {SignupForm} from '../components/SignupForm'

export function Signup() {
  return (
    <div className="flex w-full h-screen">
      <div className=" flex flex-col xl:flex-row 2xl:w-[50%] xl:w-[60%] lg:w-[80%] w-[90%] lg:flex-row  mx-auto h-[80%] my-auto xl:justify-between ">
        <div className="hidden lg:flex w-full h-full flex-col">
          <Quote/>
        </div>
        <SignupForm/>
      </div>
    </div>
  );
}
