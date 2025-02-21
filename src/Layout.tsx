import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import LeftSideBar from "./sides/LeftSide";
import RightSideBar from "./sides/RightSide";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div className="page-container relative w-full flex flex-col">
      <Header />
      <div className="flex justify-center w-full flex-1">
        <div className="flex max-w-[1500px] gap-4 w-full">
          <LeftSideBar IsPC={true} />
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
