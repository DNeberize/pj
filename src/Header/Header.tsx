import FootBallMenu from "./Center-Header/FootBallMenu";
import Favorite from "./Center-Header/Favorite";
import SearchBar from "./Center-Header/SearchBar";
import MenuButtons from "./SettingMenu";
import BurgerMenu from "./HeaderBurgerMenu";
import MobileHeaderMenu from "./MobileCenterMenu";

function Header() {
  return (
    <header className="flex-col justify-center bg-white top-0 left-0 w-full h-[5rem] lh:h-[6] fixed z-10">
      <div className="grid grid-cols-[1fr_6fr] max-w-1024-header gap-8 h-full justify-center max-w-1024-padding px-20 items-center w-full max-w-[1500px]">
        <div className="flex items-center max-w-1024-left-header justify-between">
          <BurgerMenu />
          <div className="flex justify-center min-w-[100px]">
            <img
              src="src/assets/Logo.svg"
              className="h-[40px] max-lg:h-[20px] w-auto object-contain"
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex gap-4 max-w-1024-right-header ">
          <div className="grid grid-cols-[7fr_6fr] max-w-1024-right-header  gap-[50px] relative w-full">
            <div className="flex max-w-1024-hidden gap-3">
              <FootBallMenu />
              <Favorite />
            </div>
            <SearchBar />
          </div>
          <MenuButtons />
        </div>
      </div>
      <MobileHeaderMenu />
    </header>
  );
}

export default Header;
