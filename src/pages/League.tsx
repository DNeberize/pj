import { Breadcrumb, Menu, ConfigProvider } from "antd";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import LeagLogo from "@assets/Country Flags/premier.svg";
import Vector from "../components/svgs/Vector";
import { useQuery } from "@tanstack/react-query";
import LeagueInfo from "../features/leagues/StandingInfoContext";
import axios from "axios";
import { useState } from "react";

const MenuItems = [
  { key: "1", label: "Overview", path: "overview" },
  { key: "2", label: "Schedule", path: "schedule" },
  { key: "3", label: "Standings", path: "standings" },
  { key: "4", label: "Stats", path: "stats" },
  { key: "5", label: "Transfer", path: "transfer" },
  { key: "6", label: "Champions", path: "champions" },
];

interface GoalStats {
  for: number;
  against: number;
}

interface Team {
  id: number;
  logo: string;
  name: string;
}

interface TeamStanding {
  rank: number;
  team: Team;
  points: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: GoalStats;
  };
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: GoalStats;
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: GoalStats;
  };
  form: string;
}

interface League {
  logo: string;
  name: string;
  standings?: TeamStanding[][];
}

function League() {
  const navigate = useNavigate();
  const { country, id, page } = useParams();
  const [selectedSeason, setSelectedSeason] = useState("2023/2024");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  const seasons = Array.from({ length: 10 }, (_, i) => {
    const startYear = currentYear - i;
    return `${startYear}/${startYear + 1}`;
  });

  const {
    data: leagueData,
    isLoading,
    error,
  } = useQuery<League>({
    queryKey: ["standings", id, selectedSeason],
    queryFn: async () => {
      const startYear = parseInt(selectedSeason.split("/")[0]);
      const response = await axios.get(
        `https://v3.football.api-sports.io/standings?league=${id}&season=${startYear}`,
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      return response.data.response[0]?.league;
    },
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  if (!leagueData) return <div>No league data available</div>;

  const handleMenuClick = ({ key }: { key: string }) => {
    const selectedItem = MenuItems.find((item) => item.key === key);
    if (selectedItem?.path) {
      navigate(`/country/${country}/${id}/${selectedItem.path}`);
    }
  };

  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(e.target.value);
    setIsSelectOpen(false);
  };

  const handleSelectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const activePage = page ? page.toLowerCase() : "overview";
  const currentKey =
    MenuItems.find((item) => item.path === activePage)?.key || "1";

  return (
    <div className="px-20 max-lg:px-0 flex flex-col gap-6 py-4 w-full mx-auto">
      <div className="bg-[var(--color-bg)] w-full flex flex-col justify-between p-5 pb-0 gap-5 rounded-[12px]">
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
                <Link style={{ color: "var(--color-text)" }} to="/">
                  Football
                </Link>
              ),
            },
            {
              title: (
                <Link
                  style={{ color: "var(--color-text)" }}
                  to={`/country/${country}`}
                >
                  {country}
                </Link>
              ),
            },
            {
              title: (
                <Link
                  style={{ color: "#7F3FFC" }}
                  to={`/country/${country}/${id}`}
                >
                  {leagueData.name}
                </Link>
              ),
            },
          ]}
        />

        <div className="flex items-center gap-4">
          <div className="h-28 w-28 rounded-[12px] flex justify-center p-4 border border-[var(--color-secondary)]">
            <img
              className="rounded h-full"
              src={leagueData.logo || LeagLogo}
              alt="League Logo"
            />
          </div>
          <div>
            <h2 className="text-[var(--color-text)] mb-3 font-bold text-sm">
              {leagueData.name}
            </h2>
            <div className="relative inline-block">
              <select
                value={selectedSeason}
                onChange={handleSeasonChange}
                onFocus={handleSelectToggle}
                onBlur={handleSelectToggle}
                className="text-xs font-semibold px-4 py-2 pr-8 text-[var(--color-text-light)] rounded-[8px] border border-solid border-[var(--color-secondary)] bg-transparent appearance-none"
              >
                {seasons.map((season) => (
                  <option
                    key={season}
                    value={season}
                    className="bg-[var(--color-bg)]"
                  >
                    {season}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                <Vector />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[70vw] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
          <ConfigProvider>
            <Menu
              mode="horizontal"
              selectedKeys={[currentKey]}
              items={MenuItems}
              onClick={handleMenuClick}
              className="border-b-0"
              style={{
                justifyContent: "start",
                background: "transparent",
                fontSize: "12px",
                fontWeight: 600,
                borderBottom: "none",
              }}
            />
          </ConfigProvider>
        </div>
      </div>

      <LeagueInfo.Provider
        value={{ standings: leagueData.standings?.[0] || [], selectedSeason }}
      >
        <Outlet />
      </LeagueInfo.Provider>
    </div>
  );
}

export default League;
