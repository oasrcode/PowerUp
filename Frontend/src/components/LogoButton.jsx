import { useNavigate } from "react-router-dom";

export function LogoButton() {

  const navigation = useNavigate()
  return (
    <h1
      className="text-3xl font-bold text-emerald-600 shadow-black red-900 drop-shadow-md"
      onClick={()=>navigation("/")}
    >
      Jacked
    </h1>
  );
}
