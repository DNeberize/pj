import "../../styles/index.css";
import { useState } from "react";
import Standings from "../../features/leagues/Standing";
import MobileFeedMenu from "../../features/feed/MobileFeedMenu";
import Stages from "./overview_pages/Stages";
import StatsAndPlayer from "./overview_pages/StatsAndPlayer";
import TopPlayers from "./overview_pages/TopPlayers";
import Formation from "./overview_pages/Formation";
import TeamLeagues from "./overview_pages/TeamLeagues";
import DistributionAndInfo from "./overview_pages/DistributionAndInfo";
import SideLined from "./overview_pages/SideLined";
import TeamStats from "./TeamStats";
import { ReactNode } from "react";
import About from "./overview_pages/About";

interface TabComponents {
  [key: number]: ReactNode;
}

const MenuItems = [
  { label: "Matches", id: 0 },
  { label: "Stats", id: 1 },
  { label: "Info", id: 2 },
  { label: "Standing", id: 3 },
  { label: "Lineup", id: 4 },
];

function TeamOverview() {
  const [selectedMenuButton, setSelectedMenu] = useState<number>(0);
  const [selectedStat, setSelectedStat] = useState("Goal");

  const handleMenuChange = (value: number) => {
    setSelectedMenu(value);
  };

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  let obj: TabComponents = {
    0: <Stages />,
    1: <TeamStats />,
    2: (
      <div className="flex flex-col gap-5">
        <DistributionAndInfo /> <TeamLeagues />
        <About />
      </div>
    ),
    3: <Standings />,
    4: <Formation />,
  };

  return (
    <>
      <MobileFeedMenu
        selectedTab={selectedMenuButton}
        handleTabChange={handleMenuChange}
        MenuItems={MenuItems}
        isLeaguePage={true}
      />

      <div className="hidden max-lg:block">{obj[selectedMenuButton]}</div>

      <div className="grid max-lg:hidden w-full gap-6 grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
        <div className="gap-6 flex flex-col">
          <div className="flex w-full justify-center rounded-[12px]">
            <img
              className="rounded-[12px] w-full"
              src="/src/assets/topBanner.svg"
              alt=""
            />
          </div>
          <Stages />
          <TeamStats />
          <SideLined />
          <DistributionAndInfo />
          <TeamLeagues />
          <Formation />
        </div>
        <div className="rounded-[12px] gap-5 flex flex-col">
          <StatsAndPlayer />
          <Standings isSchedulePage={true} />
          <TopPlayers
            selectedStat={selectedStat}
            handleTabChangeStat={handleTabChangeStat}
          />
          <About />
        </div>
      </div>
    </>
  );
}

export default TeamOverview;
