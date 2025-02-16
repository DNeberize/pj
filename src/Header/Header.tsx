import FootBallMenu from "./Center-Header/FootBallMenu";
import Favorite from "./Center-Header/Favorite";
import SearchBar from "./Center-Header/SearchBar";
import MenuButtons from "./SettingMenu";

function Header() {
  return (
    <header className="flex justify-center bg-white top-0 left-0 w-full h-[5rem] fixed z-10">
      <div className="grid grid-cols-[2fr_7fr_2fr] gap-8 h-full justify-center px-20 items-center w-full max-w-[1500px]">
        <div className="flex justify-center min-w-[100px]">
          <img src="src/assets/Logo.svg" className="h-[40px] w-auto object-contain" alt="Logo" />
        </div>

        <div className="grid grid-cols-[7fr_6fr] gap-[50px] relative w-full">
          <div className="flex gap-3">
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
