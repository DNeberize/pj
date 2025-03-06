import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSideBar from "./LeftSide";
import RightSideBar from "./RightSide";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="page-container relative w-full flex flex-col">
      <Header />
      <div className="flex justify-center w-full flex-1">
        <div className="flex max-w-[1500px] gap-4 w-full">
          <LeftSideBar IsDesktop={true} />
          <div className="flex-1">
            <Outlet />
          </div>
          <RightSideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
