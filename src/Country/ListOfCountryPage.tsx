import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListCountry from "./CountryListing";
import { Breadcrumb } from "antd";
import { fetchCountries } from "./fetchCountries";

type Country = {
  code: string;
  flag: string;
  name: string;
};

function ListOfCountryPage() {
  const [CountryList, setCountries] = useState<Country[]>([]);
  const [Query, SetQuery] = useState("");

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  const FilteredCountry = CountryList.filter((country) =>
    country.name.toLowerCase().includes(Query.toLowerCase())
  );

  return (
    <div className="h-auto w-full rounded-[12px] py-[20px] bg-white">
      <div className="px-[20px]">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Football</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-purple-500">Country</Breadcrumb.Item>
        </Breadcrumb>

        <h2 className="flex font-bold text-sm  text-[#231F2E] mb-5 mt-5">
          Leagues By Countries
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex">
          <input
            className="bg-[#F7F8FA] text-[#23262E]/[40%] w-full rounded-l-[8px] h-10 p-2 text-xs focus:outline-none"
            type="search"
            value={Query}
            onChange={(e) => SetQuery(e.target.value)}
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[#F7F8FA] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src="/src/assets/Search.svg" alt="Search" />
          </button>
        </form>
      </div>
      <ListCountry IsPage={true} List={FilteredCountry} />
    </div>
  );
}

export default ListOfCountryPage;
