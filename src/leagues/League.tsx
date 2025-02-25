import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Overview from "./Overview";
import LeagLogo from "@assets/Country Flags/premier.svg";
import vector from "@assets/Vector.svg";
import StandingsList from "../jsonfiles.json/StandigsList.json";

const MenuItems = [
  { label: "Overview", id: "0" },
  { label: "Schedule", id: "1" },
  { label: "Standings", id: "2" },
  { label: "Stats", id: "3" },
  { label: "Transfer", id: "4" },
  { label: "Champions", id: "5" },
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
}

interface StandingsList {
  league: League;
  standings: TeamStanding[][]; // Note: Adjust this if your data structure differs
}

interface LeagueContextType {
  id?: string;
  name?: string;
  league?: League;
  standings?: TeamStanding[];
}

export const LeageInfo = createContext<LeagueContextType>({});

function League() {
  const [selectedTab, setSelectedTab] = useState<string>("Overview");
  const name = useParams();
  const [leagueData, setLeagueData] = useState<{
    league: League | null;
    standings: TeamStanding[];
  }>({
    league: null,
    standings: [],
  });

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          `https://v3.football.api-sports.io/standings?league=${name.id}&season=2023`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              // "x-rapidapi-key": "fe4a3e5f07e932632340b6d7e7a0e345",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch standings");
        }

        const data = await response.json();
        setLeagueData({
          league: data.response[0].league,
          standings: data.response[0].league.standings[0],
        });
      } catch (error) {
        console.error("Error fetching standings:", error);
        setLeagueData({
          league: StandingsList[0].league,
          standings: StandingsList[0].league.standings[0],
        });
      }
    };

    fetchStandings();
  }, [name.id]);

  return (
    <div className="px-5 md:px-20 flex flex-col gap-6 py-4 w-full mx-auto">
      <div className="bg-white w-full flex flex-col justify-between p-5 pb-0 gap-5 rounded-[12px]">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/country">Football</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/country">Country</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/country/${name.name}`}>{name.name}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-purple-500">
            {name.League}
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex items-center gap-4">
          <div className="h-28 w-28 rounded-[12px] flex justify-center p-4 border border-[#23262E1A]">
            <img
              className="rounded h-full"
              src={leagueData.league?.logo || LeagLogo}
              alt="League Logo"
            />
          </div>
          <div>
            <h2 className="text-[#23262E] mb-3 font-bold text-sm">
              {name.League}
            </h2>
            <button className="flex text-xs font-semibold px-4 py-2 gap-2 text-[#23262EB2] rounded-[8px] border border-solid border-[#23262E1A]">
              2024/2025 <img src={vector} alt="vector" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[70vw] overflow-x-auto scrollbar-hide">
          <div className="flex min-w-0">
            {MenuItems.map((item) => (
              <button
                key={item.id}
                className={`whitespace-nowrap py-3 px-4 text-xs font-semibold transition-colors duration-500 ease-in-out
                  ${
                    selectedTab === item.label
                      ? "border-b-2 border-[#7F3FFC] text-[#7F3FFC]"
                      : ""
                  }`}
                onClick={() => setSelectedTab(item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <LeageInfo.Provider value={{ ...name, standings: leagueData.standings }}>
        <Overview />
      </LeageInfo.Provider>
    </div>
  );
}

export default League;
