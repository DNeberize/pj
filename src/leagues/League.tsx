import { Breadcrumb } from "antd";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import LeagLogo from "@assets/Country Flags/premier.svg";
import vector from "@assets/Vector.svg";
import StandingsList from "../jsonfiles.json/StandigsList.json";

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
}

export const LeagueInfo = createContext<{ standings: TeamStanding[] }>({
  standings: [],
});

function League() {
  const { country, id, league } = useParams();
  const [selectedTab, setSelectedTab] = useState<string>("overview");

  const navigate = useNavigate();
  const [leagueData, setLeagueData] = useState<{
    league: League | null;
    standings: TeamStanding[];
  }>({
    league: { logo: "", name:"" },
    standings: [],
  });
  
 
  useEffect(() => {
  const fetchStandings = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${id}&season=2023`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "e322d3134e96e5ca6f13792f4df66ed5",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch standings");
      }

      const data = await response.json();
      console.log("Fetched Data:", data); // Log the full response

      if (data.response && data.response.length > 0) {
        const league = data.response[0]?.league;
        const standings = data.response[0]?.league?.standings?.[0];

        if (league && standings) {
          setLeagueData({
            league,
            standings,
          });
        } else {
          console.error("Missing league or standings data");
          setLeagueData({
            league: null,
            standings: [],
          });
        }
      } else {
        console.error("No data available in response");
        setLeagueData({
          league: null,
          standings: [],
        });
      }
    } catch (error) {
      console.error("Error fetching standings:", error);
      setLeagueData({
        league: StandingsList[0]?.league ?? null,
        standings: StandingsList[0]?.league?.standings?.[0] ?? [],
      });
    }
  };

  fetchStandings();
}, [id]);


  const handleTabClick = (path: string, label: string) => {
    setSelectedTab(label.toLowerCase());
    navigate(`/country/${country}/${id}/${path}`);
  };
  console.log()
  return (
    <div className="px-5 md:px-20 flex flex-col gap-6 py-4 w-full mx-auto">
      <div className="bg-white w-full flex flex-col justify-between p-5 pb-0 gap-5 rounded-[12px]">
        <Breadcrumb
          items={[
            { title: <Link to="/">Home</Link> },
            { title: <Link to="/country">Football</Link> },
            { title: <Link to={`/country/${country}`}>{country}</Link> },
            {
              title: (
                <Link
                  className="text-purple-500"
                  to={`/country/${country}/${league}`}
                >
                  {league}
                </Link>
              ),
            },
          ]}
        /> 

        <div className="flex items-center gap-4">
          <div className="h-28 w-28 rounded-[12px] flex justify-center p-4 border border-[#23262E1A]">
            <img
              className="rounded h-full"
              src={leagueData.league?.logo || LeagLogo}
              alt="League Logo"
            />
          </div>
          <div>
            <h2 className="text-[#23262E] mb-3 font-bold text-sm">{leagueData.league?.name}</h2>
            <button className="flex text-xs font-semibold px-4 py-2 gap-2 text-[#23262EB2] rounded-[8px] border border-solid border-[#23262E1A]">
              2024/2025 <img src={vector} alt="vector" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[70vw] overflow-x-auto scrollbar-hide">
          <div className="flex min-w-0">
            {MenuItems.map((item) => (
              <button
                key={item.path}
                className={`whitespace-nowrap py-3 px-4 text-xs font-semibold transition-colors duration-500 ease-in-out
                  ${
                    selectedTab === item.label.toLowerCase()
                      ? "border-b-2 border-[#7F3FFC] text-[#7F3FFC]"
                      : ""
                  }`}
                onClick={() => handleTabClick(item.path, item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <LeagueInfo.Provider value={{ standings: leagueData.standings }}>
        <Outlet />
      </LeagueInfo.Provider>
    </div>
  );
}

export default League;
