import { Breadcrumb } from "antd";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LeagLogo from "@assets/Country Flags/premier.svg";
import vector from "@assets/Vector.svg";
import StandingsList from "../jsonfiles.json/StandigsList.json";
import LeagueInfo from "./StandingInfoContext";

const MenuItems = [
  { label: "Overview", path: "overview" },
  { label: "Schedule", path: "schedule" },
  { label: "Standings", path: "standings" },
  { label: "Stats", path: "stats" },
  { label: "Transfer", path: "transfer" },
  { label: "Champions", path: "champions" },
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
  const { country, id, page } = useParams();
  const navigate = useNavigate();
  const [leagueData, setLeagueData] = useState<League>({
    logo: "",
    name: "",
    standings: [],
  });
  const fetchStandings = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${id}&season=2023`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch standings");
      }
      const data = await response.json();
      console.log("Full API Response:", data);
      const leagueResponse = data.response[0]?.league;
      console.log("League Response:", leagueResponse);
      setLeagueData(leagueResponse || StandingsList[0]?.league);
    } catch (error) {
      console.error("Error fetching standings:", error);
      setLeagueData(
        StandingsList[0]?.league ?? { logo: "", name: "", standings: [] }
      );
    }
  };
  useEffect(() => {
    console.log(id, " : id deliverd to fetch league");

    fetchStandings();
  }, [id]);

  const handleTabClick = (path: string) => {
    navigate(`/country/${country}/${id}/${path}`);
  };

  const activePage = page ? page.toLowerCase() : "overview";

  return (
    <div className="px-20 max-lg:px-0 flex flex-col gap-6 py-4 w-full mx-auto">
      <div className="bg-white w-full flex flex-col justify-between p-5 pb-0 gap-5 rounded-[12px]">
        <Breadcrumb
          separator=">"
          items={[
            { title: <Link to="/">Home</Link> },
            { title: <Link to="/">Football</Link> },
            { title: <Link to={`/country/${country}`}>{country}</Link> },
            {
              title: (
                <Link
                  style={{ color: "#7F3FFC" }}
                  to={`/country/${country}/${id}`}
                >
                  {leagueData?.name}
                </Link>
              ),
            },
          ]}
        />

        <div className="flex items-center gap-4">
          <div className="h-28 w-28 rounded-[12px] flex justify-center p-4 border border-[#23262E1A]">
            <img
              className="rounded h-full"
              src={leagueData?.logo || LeagLogo}
              alt="League Logo"
            />
          </div>
          <div>
            <h2 className="text-[#23262E] mb-3 font-bold text-sm">
              {leagueData?.name}
            </h2>
            <button className="flex text-xs font-semibold px-4 py-2 gap-2 text-[#23262EB2] rounded-[8px] border border-solid border-[#23262E1A]">
              2024/2025 <img src={vector} alt="vector" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[70vw] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex min-w-0">
            {MenuItems.map((item) => (
              <button
                key={item.path}
                className={`whitespace-nowrap py-3 px-4 text-xs font-semibold transition-colors duration-500 ease-in-out ${
                  activePage === item.path
                    ? "border-b-2 border-[#7F3FFC] text-[#7F3FFC]"
                    : "text-[#23262E] hover:text-[#7F3FFC] hover:border-b-2 hover:border-[#7F3FFC]"
                }`}
                onClick={() => handleTabClick(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <LeagueInfo.Provider
        value={{ standings: leagueData.standings?.[0] || [] }}
      >
        <Outlet />
      </LeagueInfo.Provider>
    </div>
  );
}

export default League;
