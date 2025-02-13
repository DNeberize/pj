import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import LeftSideBar from "./sides/LeftSide";
import RightSideBar from "./sides/RightSide";

export default function Layout() {
  return (
    <div className=" flex justify-center">
      <Header />

      <div className="flex justify-center  gap-4">
        <LeftSideBar />

        <div className="flex-1">
          <Outlet />
        </div>

        <RightSideBar />
      </div>
    </div>
  );
}
