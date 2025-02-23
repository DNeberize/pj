import { useEffect, useState } from "react";
import TeamStandings from "./TeamStanding";

interface TeamStanding {
  rank: number;
  team: { id: number; logo: string; name: string };
  points: number;
  all: { played: number; win: number; draw: number; lose: number; goals: { for: number; against: number } };
  form: string;
}

function Standings() {
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabChange = (item: string) => {
    setSelectedTab(item);
  };

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          "https://v3.football.api-sports.io/standings?league=39&season=2023",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "fe4a3e5f07e932632340b6d7e7a0e345",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch standings");
        }

        const data = await response.json();
        setStandings(data.response[0].league.standings[0]);
      } catch (error) {
        console.error("Error fetching standings:", error);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div className="w-full">
      <div className="flex bg-white rounded-[12px] flex-col justify-between">
        <div className="flex p-4 justify-between w-full">
          <h2 className="text-[#23262E] font-bold text-[14px]">Standings</h2>
          <div className="bg-[#F7F8FA] p-1 rounded-[12px] flex">
            {["All", "Home", "Away"].map((item, index) => (
              <button
                key={index}
                className={`rounded-[8px] py-[8px] text-[12px] px-[1rem] cursor-pointer font-semibold w-full max-w-[440px] transition-colors duration-500 ease-in-out ${
                  selectedTab === item ? "bg-white text-[#23262E]" : "text-[#23262EB2]"
                }`}
                onClick={() => handleTabChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="border-b-1 border-solid border-[#23262E1A] grid gap-3 px-5 py-3 grid-cols-[4fr_3fr_4fr]">
          <div className="flex gap-3">
            <span className="text-[12px]">#</span>
            <h3 className="text-[12px]">Team</h3>
          </div>
          <div className="flex gap-3 justify-around">
            <h3 className="text-[#23262EB2] flex justify-center text-[12px]">P</h3>
            <h3 className="text-[#3ECC29] flex justify-center text-[12px]">W</h3>
            <h3 className="text-[#FFC21A] flex justify-center text-[12px]">D</h3>
            <h3 className="text-[#F21818] flex justify-center text-[12px]">L</h3>
          </div>
          <div className="grid gap-3 grid-cols-[2fr_5fr_1fr]">
            <h3 className="flex text-[12px] justify-center">Goals</h3>
            <div className="flex text-[12px] justify-end gap-3">Last 5</div>
            <h3 className="flex text-[12px] justify-center">Pts</h3>
          </div>
        </div>
        <TeamStandings data={standings} />
      </div>
    </div>
  );
}

export default Standings;
