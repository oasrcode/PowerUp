import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

export function DashBoard() {
  return <div className="flex flex-col w-full max-w-full h-screen">
    <div className="flex flex-col w-full h-full  lg:flex-row lg:w-3/4 lg:h-3/4 bg-gray-50 mx-auto my-auto rounded-lg shadow-lg shadow-gray-800">
      <Outlet/>
    </div>
  </div>;
}
