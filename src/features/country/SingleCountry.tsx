import { Link, useParams, useSearchParams } from "react-router-dom";
import LeagueListing from "../leagues/LeagueListing";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchLeaguesByCountry, League } from "../../utils/FetchLeagues";

function SingleCountry() {
  const { country } = useParams<{ country: string }>();
  const [searchParams] = useSearchParams();
  const modal = searchParams.get("modal"); // Get "settings"

  const decodedCountry = country ? decodeURIComponent(country) : "";
  const {
    data: leagues = [],
    isLoading,
    error,
  } = useQuery<League[]>({
    queryKey: ["leagues", decodedCountry],
    queryFn: () => fetchLeaguesByCountry(decodedCountry),
    enabled: !!decodedCountry,
  });

  return (
    <div>
      <div className="h-auto mb-[20px] inline-block w-full items-center rounded-[12px] py-2 px-[20px] bg-[var(--color-bg)]">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: (
                <Link style={{ color: "var(--color-text)" }} to="/">
                  Home
                </Link>
              ),
            },
            {
              title: (
                <Link style={{ color: "var(--color-text)" }} to="/country">
                  Football
                </Link>
              ),
            },
            {
              title: (
                <Link style={{ color: "var(--color-text)" }} to="/country">
                  Country
                </Link>
              ),
            },
            {
              title: <span className="text-purple-500">{decodedCountry}</span>,
            },
          ]}
        />

        <div className="flex items-center mb-5 mt-5 gap-4">
          <div className="h-16 w-21 rounded-[12px] p-3 flex justify-center items-center border-1 border-[var(--color-secondary)]">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Flag unavailable</p>
            ) : (
              <img
                className="rounded-1"
                src={leagues[0]?.flag || ""}
                alt={`${decodedCountry} Flag`}
              />
            )}
          </div>
          <h2 className="text-[var(--color-text)] font-bold text-sm">
            {decodedCountry}
          </h2>
        </div>
      </div>

      <div className="h-auto w-full rounded-[12px] py-[20px] bg-[var(--color-bg)]">
        <h2 className="flex font-bold text-sm px-[20px] text-[var(--color-text-dark)] mb-[15px]">
          All Football Leagues and Tournaments of {decodedCountry}
        </h2>
        {isLoading ? (
          <div className="px-[20px]">Loading leagues...</div>
        ) : error ? (
          <div className="px-[20px] text-red-500">
            Error: {(error as Error).message}
          </div>
        ) : (
          <LeagueListing IsPage={true} List={leagues} />
        )}
      </div>
    </div>
  );
}

export default SingleCountry;
