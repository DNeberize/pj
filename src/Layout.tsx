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
        <div className="grid max-w-[1500px]  grid-cols-[minmax(200px,1fr)_minmax(600px,2fr)_minmax(200px,1fr)] gap-4 w-full ">
          <LeftSideBar />
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
