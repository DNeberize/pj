import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  const {
    data: countries = [],
    isLoading,
    error,
  } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const filteredCountries = searchQuery
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries;

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

        <h2 className="flex font-bold text-sm text-[var(--color-text-dark)] mb-5 mt-5">
          Leagues By Countries
        </h2>
      </div>

      <ListCountry IsPage={true} List={filteredCountries} />
    </div>
  );
}

export default ListOfCountryPage;
