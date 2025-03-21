import { Breadcrumb, Menu, ConfigProvider } from "antd";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import ManCity from "@assets/Clubs/ManchesterCity.svg";
import TeamInfo from "../features/teams/TeamInfoContext";
import { useQuery } from "@tanstack/react-query";
import { FetchTeam } from "../utils/FetchTeam";
import { useEffect } from "react";
const MenuItems = [
  { key: "1", label: "Overview", path: "overview" },
  { key: "2", label: "Salary", path: "salary" },
  { key: "3", label: "Schedule", path: "schedule" },
  { key: "4", label: "Squad", path: "squad" },
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

interface Team {
  logo: string;
  name: string;
  standings?: TeamStanding[][];
}

function Team() {
  const navigate = useNavigate();
  const { country, id, team, page } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["team", team],
    queryFn: () => FetchTeam(Number(team)),
  });
  if (isLoading) {
    return <div>Loading team info...</div>;
  }

  if (isError) {
    return (
      <div>
        Error fetching team info: {(error as Error)?.message || "Unknown error"}
      </div>
    );
  }
  const handleMenuClick = ({ key }: { key: string }) => {
    const selectedItem = MenuItems.find((item) => item.key === key);
    if (selectedItem?.path) {
      navigate(`/country/${country}/${id}/team/${team}/${selectedItem.path}`);
    }
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
                  to={`/country/${country}/${id}/team/${team}`}
                >
                  {data?.team.name}
                </Link>
              ),
            },
          ]}
        />

        <div className="flex items-center gap-4">
          <div className="h-28 w-28 rounded-[12px] flex justify-center p-4 border border-[var(--color-secondary)]">
            <img
              className="rounded h-full"
              src={data?.team.logo}
              alt="Team Logo"
            />
          </div>
          <div>
            <h2 className="text-[var(--color-text)] mb-3 font-bold text-sm">
              {data?.team.name}
            </h2>
            <h3 className="text-xs text-[var(--color-text-light)]">
              {data?.team.country}
            </h3>
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

      <TeamInfo.Provider value={""}>
        <Outlet />
      </TeamInfo.Provider>
    </div>
  );
}

export default Team;
