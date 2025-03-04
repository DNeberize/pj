import { useState } from "react";
import { Link } from "react-router-dom";
import ListCountry from "./CountryListing";
import { Breadcrumb } from "antd";
import { fetchCountries } from "../../utils/fetchCountries";
import { useQuery } from "@tanstack/react-query";

type Country = {
  code: string;
  flag: string;
  name: string;
};

function ListOfCountryPage() {
  const [search, setSearch] = useState("");

  const {
    data: countries = [],
    isLoading,
    error,
  } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const FilteredCountry = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>Loading countries...</div>;
  if (error)
    return <div>Error loading countries: {(error as Error).message}</div>;
  return (
    <div className="h-auto w-full rounded-[12px] py-[20px] bg-[var(--color-bg)]">
      <div className="px-[20px]">
        <Breadcrumb
          items={[
            { title: <Link to="/">Home</Link> },
            { title: <span>Football</span> },
            { title: <span className="text-purple-500">Country</span> },
          ]}
          separator=">"
        />

        <h2 className="flex font-bold text-sm  text-[#231F2E] mb-5 mt-5">
          Leagues By Countries
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex">
          <input
            className="bg-[var(--color-primary)] text-[var(--color-text)]/[40%] w-full rounded-l-[8px] h-10 p-2 text-xs focus:outline-none"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[var(--color-primary)] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
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
