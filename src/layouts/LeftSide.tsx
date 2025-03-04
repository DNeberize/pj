import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import LeagueListing from "../features/leagues/LeagueListing";
import CountryListing from "../features/country/CountryListing";
import { fetchCountries } from "../utils/fetchCountries";
import test from "../data/test.json";
import { useQuery } from "@tanstack/react-query";

interface LeftSideBarProps {
  IsPC: boolean;
}

type Country = {
  id?: number;
  code: string;
  flag: string;
  name: string;
  logo: string;
};

function LeftSideBar({ IsPC }: LeftSideBarProps) {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [search, location.pathname, navigate]);
  function searchPage() {
    const params = new URLSearchParams(location.search);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    navigate(`/country?${params.toString()}`);
  }

  const {
    data: countries = [],
    isLoading,
    error,
  } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>Loading countries...</div>;
  if (error)
    return <div>Error loading countries: {(error as Error).message}</div>;

  return (
    <div
      className={`${IsPC && "lg:pl-[5rem] max-lg:hidden"} ${
        id && IsPC ? "hidden" : ""
      }`}
    >
      <div className="flex">
        <div>
          <h2 className="font-bold text-sm text-[var(--color-text-dark)] pb-4 my-[15px] border-b-1 border-solid border-[var(--color-text)]/10">
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
          <Link to="/country">Countries</Link>
          <span className="text-[var(--color-text-dark)]/70 pl-2">[A-Z]</span>
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
