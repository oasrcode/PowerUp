import { useState } from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import axios from 'axios';
import { UserAuth } from "../Context/AuthContext";
export function BodyFat(){
    const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [neck, setNeck] = useState();
  const [waist, setWaist] = useState();
  const [hip, setHip] = useState();
  const [bodyFat, setBodyfat] = useState();

  const [isWoman,setIswoman]=useState(false);
  const [result, setResult] = useState(false);

  const {user}=UserAuth();

  function calculateBodyFat(){

    
     if(gender=="male"){
       /*86.010 x log10(abdomen - neck) - 70.041 x log10(height) + 36.76*/ 
       setBodyfat(Math.round((86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76)*100)/100);
     }

     if(gender=="female"){
            /*163.205 x log10(waist + hip - neck) - 97.684 x log10(height) - 78.387*/ 
          setBodyfat(Math.round((163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387)*100)/100);

     }
  }
  function HandleSummit(e){
        e.preventDefault();
        

        const data ={};

        data.bodyfat=bodyFat;
       

        console.log(data)

        var config = {
          method: "put",
          url: "http://localhost:8080/api/users/"+user.email,
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
            "Content-Type": "application/json",
            AuthToken: user.accessToken,
          },
          data:data
        };
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        
  }
    return(
        <div className="flex flex-col w-full max-w-full h-screen overflow-auto">
          <form onSubmit={HandleSummit}>
            <div className="grid grid-row-1  lg:grid-cols-3  w-full lg:w-3/5 h-full  mx-auto lg:my-auto lg:mt-20 bg-slate-200 ">
              <div className="flex flex-col items-center justify-evenly">
                <p className="flex- font-bold text-2xl text-gray-700">
                  ¿Cuál es tu género?
                </p>
                <div className="flex flex-row  items-center justify-center lg:h-44 lg:w-full lg:gap-20">
                  <div className="flex flex-col  justify-center items-center">
                    <FcBusinessman size={100} />
                    <button
                      type={"button"}
                      className="px-8 py-2 rounded-xl bg-slate-200 focus:ring-4 focus:ring-blue-600"
                      onClick={() => {setGender("male"),setIswoman(false)}}
                    >
                      Hombre
                    </button>
                  </div>
    
                  <div className="flex flex-col justify-center items-center">
                    <FcBusinesswoman size={100} />
                    <button
                      type={"button"}
                      className="px-8 py-2 rounded-xl bg-slate-200 focus:ring-4 focus:ring-pink-600"
                      onClick={() => {setGender("female"),setIswoman(true)}}
                    >
                      Mujer
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="flex flex-col items-center justify-evenly ">
                <p className="font-bold text-2xl text-gray-700">
                  ¿Cuántos años tienes?
                </p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="18"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setAge(event.target.value)}
                  />
                  <label className="text-gray-700 text-lg"> años</label>
                </div>
              </div>
    
              <div className="flex flex-col items-center justify-evenly ">
                <p className="font-bold text-2xl text-gray-700">¿Cuánto mides?</p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="175"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setHeight(event.target.value)}
                  />
                  <label className="text-gray-700 text-lg">cm</label>
                </div>
              </div>


            

              <div className="col-span-3 ">

                <div className="flex items-center  justify-center grid-cols-3 grid-flow-col gap-10">
                    
              <div className="flex flex-col items-center justify-evenly ">
                <p className="font-bold text-xl text-gray-700">¿Cuál es el perímetro de tu cuello?</p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="30"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setNeck(event.target.value)}
                  />
                  <label className="text-gray-700 text-lg">cm</label>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-evenly ">
                <p className="font-bold text-xl text-gray-700">¿Cuál es el perímetro de tu cintura?</p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="70"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setWaist(event.target.value)}
                  />
                  <label className="text-gray-700 text-lg">cm</label>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-evenly ">
              {isWoman ? (
              <div className="">
                <p className="font-bold text-xl text-gray-700">¿Cuál es el perímetro de tu cadera?</p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="70"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setHip(event.target.value)}
                  />
                  <label className="text-gray-700 text-lg">cm</label>
                </div>
              </div>
            ) : null}
              </div>

                </div>
                    
                </div>

                <div className=" col-span-3 flex items-center justify-center">
                <button type={"button"} className="px-8 py-2 rounded-xl bg-slate-500 text-white hover:bg-black" onClick={()=>{setResult(true);calculateBodyFat();}}>Calcular</button>
                </div>
              


                <div className="block col-span-3">
                {result ? (
                  <div className=" flex items-center justify-center gap-4  mb-10  bg-emerald-200 rounded-3xl">
                    <p className="font-bold text-2xl text-gray-700">
                      Resultado: Tu porcentaje de grasa corporal es de {bodyFat} %
                    </p>
                    <button
                      className="px-6 py-2 text-black text-2xl bg-green-100 rounded-3xl"
                      type={"submit"}
                    >
                      Guardar
                    </button>
                  </div>
                ) : null}
              </div>
                

             
            </div>
          </form>
        </div>)
}