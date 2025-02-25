import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LeagueListing from "../leagues/LeagueListing";
import CountryListing from "../Country/CountryListing";
import { fetchCountries } from "../Country/fetchCountries";
import test from "../jsonfiles.json/test.json";

interface LeftSideBarProps {
  IsPC: boolean;
}

type Country = {
  id?: number;
  code: string;
  flag: string;
  name: string;
};

function LeftSideBar({ IsPC }: LeftSideBarProps) {
  const name = useParams();
  console.log(name.League);

  const [CountryList, setCountries] = useState<Country[]>([]);
  const [Query, SetQuery] = useState("");

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  const FilteredCountry = CountryList.filter((country) =>
    country.name.toLowerCase().includes(Query.toLowerCase())
  );

  return (
    <div
      className={`${IsPC && " lg:pl-[5rem] max-lg:hidden"} ${
        name.League && " hidden "
      } `}
    >
      <div className="flex">
        <div>
          <h2 className="font-bold text-sm text-[#231F2E] pb-4 my-[15px] border-b-1 border-solid border-[#23262E]/10">
            Pinned Leagues
          </h2>
          <LeagueListing
            IsPage={false}
            List={test.map((item) => ({
              id: item.league.id,
              flag: item.league.logo,
              name: item.league.name,
              country: item.country.name,
            }))}
          />
        </div>
      </div>
      <div className="">
        <h2 className="flex font-bold text-sm text-[#231F2E] mb-[15px] mt-[30px]">
          <Link to="/country"> Countries </Link>
          <span className="text-[#231F2E]/70 pl-2">[A-Z]</span>
        </h2>
        <form className="flex">
          <input
            className="bg-white text-[#23262E]/[40%] w-full rounded-l-[8px] h-10 p-2 text-xs focus:outline-none"
            type="search"
            value={Query}
            onChange={(e) => SetQuery(e.target.value)}
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-white rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src="/src/assets/Search.svg" alt="Search" />
          </button>
        </form>
        <CountryListing IsPage={false} List={FilteredCountry} />
      </div>
    </div>
  );
}

export default LeftSideBar;
