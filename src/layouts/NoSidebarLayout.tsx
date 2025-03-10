import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function NoSidebarLayout() {
  return (
    <div className="page-container relative w-full flex flex-col">
      <Header />
      <div className="w-full flex justify-center">
      <div className="flex-1 max-w-[1500px]">
        <Outlet />
      </div></div>
      <Footer />
    </div>
  );
}
