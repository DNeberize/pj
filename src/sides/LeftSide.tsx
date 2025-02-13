import Leagues from "../Leagues.json";
import LeagueList from "./Listing";
import Country from "../Country.json";

function LeftSideBar() {
  return (
    <div className="flex flex-col w-[248px]">
      <div className="flex">
        <div className="">
          <h2 className="font-bold text-[14px] text-[#231F2E] pb-4 mb-[15px] mt-[15px] border-b-1 border-solid border-[#23262E]/10">
            Pinned Leagues
          </h2>
          <LeagueList List={Leagues} />
        </div>
      </div>
      <div>
        <h2 className="flex font-bold text-[14px] text-[#231F2E]  mb-[15px] mt-[30px]">
          Countries <span className="text-[#231F2E]/70 ml-2">[A-Z]</span>
        </h2>
        <form className="flex">
          <input
            className="bg-[#F7F8FA] text-[#23262E]/[40%] rounded-l-[8px] h-10 p-2 pr-[50px] text-[12px] focus:outline-none"
            type="search"
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[#F7F8FA] rounded-r-[8px] h-10 w-[48px] flex items-center justify-center"
          >
            <img src="src/assets/Search.svg" alt="" className="w-4 h-4" />
          </button>
        </form>
        <LeagueList List={Country} />
      </div>
    </div>
  );
}

export default LeftSideBar;
