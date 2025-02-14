import FootBallMenu from "./Center-Header/FootBallMenu";
import Favorite from "./Center-Header/Favorite";
import SearchBar from "./Center-Header/SearchBar";
import MenuButtons from "./SettingMenu";

function Header() {
  return (
    <header className="flex justify-center bg-[#FFFFFF] top-0 left-0 w-full h-[80px] max-h-[80px]  m-0 fixed  z-1">
      <div className="flex h-[80px] max-h-[80px] justify-center left-0 right-0 items-center w-full max-w-[1500px] ">
        <img src="src\assets\Logo.svg" alt="" />
        <div className=" flex justify-between w-[58vw]">
          <div className="gap-3 flex">
            <FootBallMenu />
            <Favorite />
          </div>
          <SearchBar />
        </div>
        <MenuButtons />
      </div>
    </header>
  );
}

export default Header;
