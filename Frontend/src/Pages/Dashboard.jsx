import { Outlet } from "react-router-dom";
import { DashBoardSideMenu } from "../components/DashboardSideMenu";
import { DashboardSlideMenu } from "../components/DashboardSlideMenu";
export function DashBoard() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-full h-screen bg-neutral-300">
      <DashBoardSideMenu />

      <div className=" relative flex flex-col w-full h-full overflow-hidden bg-neutral-200">
        <DashboardSlideMenu />

        <Outlet />
      </div>
    </div>
  );
}
