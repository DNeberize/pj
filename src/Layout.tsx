import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import LeftSide from "./Feed/LeftSide";
import RightSideBar from "./Feed/RightSide";

export default function Layout() {
  return (
    <div className=" flex justify-center">
      
      <Header />
      

      <div className="flex justify-center  gap-4">
        
        <LeftSide />

        <div className="flex-1">
          <Outlet />
        </div>

        <RightSideBar />
      </div>
    </div>
  );
}
