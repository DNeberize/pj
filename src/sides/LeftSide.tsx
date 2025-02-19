import Leagues from "../Leagues.json";
import LeagueList from "./Listing";
import Country from "../Country.json";
import { useState } from "react";

interface LeftSideBarProps {
  IsPC: boolean;
}

function LeftSideBar({ IsPC }: LeftSideBarProps) {
  const [CountryList] = useState(Country);
  const [Query, SetQuery] = useState("");

  const FilteredCountry = CountryList.filter((country) =>
    country.name.toLowerCase().includes(Query.toLowerCase())
  );

  return (
    <div className={`${IsPC && "pl-[5rem] max-w-1024-hidden"} `}>
      <div className="flex">
        <div>
          <h2 className="font-bold text-[14px] text-[#231F2E] pb-4 my-[15px] border-b-1 border-solid border-[#23262E]/10">
            Pinned Leagues
          </h2>
          <LeagueList List={Leagues} />
        </div>
      </div>
      <div>
        <h2 className="flex font-bold text-[14px] text-[#231F2E] mb-[15px] mt-[30px]">
          Countries <span className="text-[#231F2E]/70 pl-2">[A-Z]</span>
        </h2>
        <form className="flex">
          <input
            className="bg-[#F7F8FA] text-[#23262E]/[40%] w-full rounded-l-[8px] h-10 p-2 text-[12px] focus:outline-none"
            type="search"
            value={Query}
            onChange={(e) => SetQuery(e.target.value)}
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[#F7F8FA] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src="src/assets/Search.svg" alt="Search" />
          </button>
        </form>
        <LeagueList List={FilteredCountry} />
      </div>
    </div>
  );
}

export default LeftSideBar;
