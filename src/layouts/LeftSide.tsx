import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LeagueListing from "../features/leagues/LeagueListing";
import CountryListing from "../features/country/CountryListing";
import { fetchCountries } from "../utils/fetchCountries";
import test from "../data/test.json";
import { useQuery } from "@tanstack/react-query";

interface LeftSideBarProps {
  IsDesktop: boolean;
}

type Country = {
  id?: number;
  code: string;
  flag: string;
  name: string;
  logo: string;
};

function LeftSideBar({ IsDesktop }: LeftSideBarProps) {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  function searchPage() {
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    if (location.pathname === "/") {
      navigate(`/country?${params.toString()}`);
    } else if (location.pathname.startsWith("/country")) {
      navigate(`${location.pathname}?${params.toString()}`);
    } else {
      navigate(`/country${location.pathname}?${params.toString()}`);
    }
  }

  const {
    data: countries = [],
    isLoading,
    error,
  } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: async () => await fetchCountries(),
  });

  const filteredCountries = countries
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (isLoading) return <div>Loading countries...</div>;
  if (error)
    return <div>Error loading countries: {(error as Error).message}</div>;

  return (
    <div className={`${IsDesktop ? "lg:pl-[5rem] max-lg:hidden" : ""} `}>
      <div className="flex">
        <div>
          <h2 className="font-bold text-sm text-[var(--color-text-dark)] pb-4 my-[15px] border-b border-[var(--color-text)]/10">
            Pinned Leagues
          </h2>
          <LeagueListing
            IsPage={false}
            List={test.map((item) => ({
              id: item.league.id,
              logo: item.league.logo,
              flag: item.country.flag,
              name: item.league.name,
              country: item.country.name,
            }))}
          />
        </div>
      </div>
      <div>
        <h2 className="flex font-bold text-sm text-[var(--color-text-dark)] mb-[15px] mt-[30px]">
          <Link to="/country">
            Countries
            <span className="text-[var(--color-text-dark)]/70 pl-2">[A-Z]</span>
          </Link>
        </h2>
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            searchPage();
          }}
        >
          <input
            className="bg-[var(--color-bg)] text-[var(--color-text)]/[40%] w-full rounded-l-[8px] h-10 p-2 text-xs focus:outline-none"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[var(--color-bg)] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src="/src/assets/Search.svg" alt="Search" />
          </button>
        </form>

        <CountryListing IsPage={false} List={filteredCountries} />
      </div>
    </div>
  );
}

export default LeftSideBar;
