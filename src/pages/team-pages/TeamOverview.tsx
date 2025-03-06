import "../../styles/index.css";
import { useState } from "react";
import Standings from "../../features/leagues/Standing";
import MobileFeedMenu from "../../features/feed/MobileFeedMenu";
import Stages from "./overview_pages/Stages";
import FactsAndTitles from "./overview_pages/FactsAndTitles";
import StatsAndPlayer from "./overview_pages/StatsAndPlayer";
import TopPlayers from "./overview_pages/TopPlayers";
import { ReactNode } from "react";
import Formation from "./overview_pages/Formation";
import TeamLeagues from "./overview_pages/TeamLeagues";
import DistributionAndInfo from "./overview_pages/DistributionAndInfo";
interface TabComponents {
  [key: number]: ReactNode;
}

const MenuItems = [
  { label: "Stages", id: 0 },
  { label: "Info", id: 1 },
  { label: "Standing", id: 2 },
  { label: "Top Player", id: 3 },
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
    1: <FactsAndTitles onSide={false} TitleHolderOnly={false} />,
    2: <Standings />,
    3: <StatsAndPlayer />,
  };

  return (
    <>
      <MobileFeedMenu
        selectedTab={selectedMenuButton}
        handleTabChange={handleMenuChange}
        MenuItems={MenuItems}
        isLeaguePage={true}
      />

      <div className="block md:hidden">{obj[selectedMenuButton]}</div>

      <div className="hidden md:grid w-full gap-6  grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
        <div className="gap-6 flex flex-col">
          <div className="flex w-full justify-center rounded-[12px]">
            <img
              className="rounded-[12px] w-full"
              src="/src/assets/topBanner.svg"
              alt=""
            />
          </div>

          <Stages />
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
        </div>
      </div>
    </>
  );
}

export default TeamOverview;
