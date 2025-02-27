import TopPlayerDatas from "./page_components/TopPlayers";
import { useState, useEffect } from "react";
import FactsAndTitles from "./page_components/FactsAndTitles";
import halad from "@assets/Halad.svg";
interface Player {
  photo: string;
  name: string;
}

export default function Stats() {
  const [selectedStat, setSelectedStat] = useState("Goal");
  const [playerData, setPlayerData] = useState<Player[]>([]);
  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  const fetchStandings = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/players?team=49&season=2023`,
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
      console.log(data);

      const formattedPlayers = data.response.map((player: any) => ({
        name: `${player.player.name} ${player.player.lastname}`,
        photo: player.player.photo,
      }));

      setPlayerData(formattedPlayers);
      // if (playerData) {
      //   setPlayerData([{ photo: halad, name: "Erling Halad" }]);
      // }
    } catch (error) {
      console.error("Error fetching standings:", error);
    }
  };

  useEffect(() => {
    fetchStandings();
  }, []);
  console.log(playerData);

  return (
    <div className=" grid w-full gap-6  grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      <div className="rounded-[12px] pt-5 gap-6 flex-col  bg-white ">
        {playerData.map((e, index) => {
          return (
            <div
              key={index}
              className="flex w-full border-b-1 items-center justify-between h-12 border-[#23262E1A]"
            >
              <div className="flex gap-2 pl-5">
                <span className="flex text-xs items-center">{index}</span>
                <img
                  className="h-6 w-6 rounded-[45px]"
                  src={e.photo}
                  alt="halad"
                />
                <h2 className="items-center font-semibold text-xs flex">
                  {e.name}
                </h2>
              </div>
              <div className="text-purple-500 pr-5">9</div>
            </div>
          );
        })}
      </div>
      <div className="flex-col flex gap-5">
        <FactsAndTitles TitleHolderOnly={true} />
        <TopPlayerDatas
          selectedStat={selectedStat}
          handleTabChangeStat={handleTabChangeStat}
        />
      </div>
    </div>
  );
}
