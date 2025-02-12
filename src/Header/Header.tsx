import FootBallMenu from "./Center-Header/FootBallMenu";
import Favorite from "./Center-Header/Favorite";
import SearchBar from "./Center-Header/SearchBar";
import MenuButtons from "./SettingMenu";

function Header() {
  return (
    <header className="flex bg-[#FFFFFF] top-0 w-full h-[12.5vh] max-w-[1500px] items-center m-0 fixed pr-[12.5vh] pl-[12.5vh]">
      <img src="src\assets\Logo.svg" alt="" />
      <div className=" flex justify-between w-[58vw]">
      <div className="gap-3 flex">
      <FootBallMenu />
      <Favorite />
      </div>
      <SearchBar/>
      </div>
      <MenuButtons/>
    </header>
  );
}

export default Header;
