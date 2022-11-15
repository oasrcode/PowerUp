import { AiOutlineGithub } from "react-icons/ai";
import image from "../assets/stoic.png";
import imagebw from "../assets/stoic-bw.png";
import head_cortada from "../assets/head_cortada.png";
import head from "../assets/head_cortada_editada.png";
export function Home() {
  return (
    <div className="flex flex-col w-full max-w-full h-screen mt-[-96px] ">
      <div className="mx-auto  my-auto border-8 border-white ">
        {/* <img className='float-right z-10  mr-[-70px] mt-[-50px] h-[180px]  md:mr-[-100px] md:mt-[-80px] md:h-[300px]  xl:mr-[-120px] xl:mt-[-100px] xl:h-[330px]' src={imagebw} ></img> */}
        <img
          className="hidden xl:flex xl:float-right xl:z-10 xl:mr-[-149px] xl:mt-[-10px] xl:h-[500px]"
          src={head}
        ></img>
        <p className="md:text-8xl sm:text-7xl text-6xl font-bold  text-white text-left pt-2 pl-2">
          Eat
        </p>
        <p className="md:text-8xl sm:text-7xl text-6xl  font-bold  text-white text-left pt-2 pl-2">
          Gym
        </p>
        <p className="md:text-8xl sm:text-7xl text-6xl font-bold text-white text-left pt-2 pl-2">
          Sleep
        </p>
        <p className="md:mb-[-15px] sm:mb-[-10px]  mb-[-8px] md:text-9xl sm:text-8xl text-7xl font-bold text-[#FB2576] text-left pt-4 pl-2 pr-2 font-candice">
          Repeat.
        </p>
      </div>

     

      <div className="flex items-center justify-center space-x-2 my-5">
        <span className="h-px w-16 bg-gray-100"></span>
        <AiOutlineGithub className='cursor-pointer' size={50} color="#FB2576" onClick={()=>(console.log("https://www.github.com/oasrcode"))}/>
        <p className='text-white'>oasrcode</p>
        <span className="h-px w-16 bg-gray-100"></span>
      </div>
    </div>
  );
}
