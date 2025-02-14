import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import LeftSideBar from "./sides/LeftSide";
import RightSideBar from "./sides/RightSide";
import Footer from "./footer/Footer";
export default function Layout() {
  return (
    <div className="block px-[4%] ">
      <Header />
      <div className="flex gap-4 ">
        <LeftSideBar />
        <div className="flex-1 ">
          <Outlet />
        </div>
        <RightSideBar />
      </div>
      <Footer />
    </div>
  );
}
