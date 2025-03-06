import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function NoSidebarLayout() {
  return (
    <div className="page-container relative w-full flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
