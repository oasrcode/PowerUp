import { ProfileCard } from "../components/Cards/ProfileCard";
import { getUser } from "../Service/User/getUser";
import { getMaxLifts } from "../Service/User_Logs/getMaxLifts";
import { Loading } from "../components/Loading";
import { formatDate } from "../tools/formatDate";
import { Card } from "../components/Cards/Card";
import fat from "../assets/icons/fat.png";
import calories from "../assets/icons/calorias.png";
import bmi from "../assets/icons/bmi.png";
import { ButtonCard } from "../components/Cards/ButtonCard";
import { bmiCalculator } from "../tools/bmiCalculator";

const cardConfig = [
  {
    name: "bodyfat",
    img: fat,
    path: "/dashboard/bodyfat",
    gradient: " bg-gradient-to-r from-yellow-400 to bg-yellow-800",
  },
  {
    name: "calories",
    img: calories,
    path: "/dashboard/dailycals",
    gradient: "bg-gradient-to-r  from-yellow-400 via-red-500 to-red-800",
  },
  {
    img: bmi,
    gradient: "bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800",
  },
];

export function Landing() {
  const { data, loaded } = getUser();
  const { lifts } = getMaxLifts();

  return loaded ? (
    <div className="w-full h-full overflow-auto">
      <div className="flex md:flex-row flex-col  md:pl-14 md:pt-10 xl:pt-5 md:pb-20 md:space-x-4 items-center justify-between">
        <div className="flex flex-row 2xl:space-x-5 2xl:mt-10 items-baseline justify-center mt-10 md:mt-0">
          <p className=" text-2xl 2xl:text-5xl md:text-4xl text-neutral-900 font-serif text-center font-semibold">
            Bienvenido
            <span className="text-red-700 text-4xl md:text-5xl font-extralight font-serif">
              !
            </span>
          </p>
          <p className="flex text-2xl 2xl:text-5xl md:text-4xl font-serif  text-neutral-900 font-semibold truncate text-center">
            {data?.name}
          </p>
        </div>

        <div>
          <p className="hidden md:flex md:pr-10 2xl:pr-44 text-red-700 font-semibold">
            {formatDate(new Date().toISOString().split("T")[0])}
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:w-full xl:h-3/4 2xl:w-10/12 2xl:mx-auto 2xl:h-3/4 md:flex-row md:pl-10 xl:pl-5 mt-10 md:mt-0">
        <div className="flex flex-col md:w-full md:my-auto md:mx-auto ">
          <ProfileCard userData={data} lifts={lifts} />
        </div>

        <div className="flex flex-col 2xl:pl-20 md:px-5  xl:px-4 w-[90%] mx-auto pt-10 md:pt-0  pb-10 md:pb-0 justify-between  gap-4 2xl:gap-0">
          <Card
            key={cardConfig[2].name}
            data={bmiCalculator(data?.weight, data?.height)}
            img={cardConfig[2].img}
            gradient={cardConfig[2].gradient}
          />
          <Card
            key={cardConfig[0].name}
            data={data?.bodyfat +" %"}
            img={cardConfig[0].img}
            gradient={cardConfig[0].gradient}
            button={<ButtonCard path={cardConfig[0].path} label={"Calcular"} />}
          ></Card>
          <Card
            key={cardConfig[1].name}
            data={data?.calories}
            img={cardConfig[1].img}
            gradient={cardConfig[1].gradient}
            button={<ButtonCard path={cardConfig[1].path} label={"Calcular"} />}
          ></Card>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
