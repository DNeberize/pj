import Standings from "../Standing";
import TopPlayers from "./page_components/TopPlayers";
import { useState } from "react";

export default function Standing() {
  const [selectedStat, setSelectedStat] = useState("Goal");

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };
  return (
    <div className="hidden md:grid w-full gap-6  grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      {<Standings />}
      {
        <TopPlayers
          selectedStat={selectedStat}
          handleTabChangeStat={handleTabChangeStat}
        />
      }
    </div>
  );
}
