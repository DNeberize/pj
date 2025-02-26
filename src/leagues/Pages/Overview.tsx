import "../../index.css";
import { useState } from "react";
import Standings from "../Standing";
import MobileFeedMenu from "../../Feed/MobileFeedMenu";
import TournamentSection from "./Stages";
import FactsAndTitles from "./FactsAndTitles";
import StatsAndPlayer from "./StatsAndPlayer";
import TopPlayers from "./TopPlayers";
import { ReactNode } from "react";
interface TabComponents {
  [key: number]: ReactNode;
}

const MenuItems = [
  { label: "Stages", id: 0 },
  { label: "Info", id: 1 },
  { label: "Standing", id: 2 },
  { label: "Top Player", id: 3 },
];

function Overview() {
  const [selectedTab, setSelectedTab] = useState(38);
  const [selectedMenuButton, setSelectedMenu] = useState<number>(0);
  const [selectedStat, setSelectedStat] = useState("Goal");

  const handleMenuChange = (value: number) => {
    setSelectedMenu(value);
    const selectedItem = MenuItems.find((item) => item.id === value);
    setSelectedTab(Number(selectedItem.id));
  };

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  const handleTabChange = (label: number) => {
    setSelectedTab(label);
  };

  let obj: TabComponents = {
    0: (
      <TournamentSection
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
      />
    ),
    1: <FactsAndTitles />,
    2: <Standings />,
    3: <StatsAndPlayer />,
  };

  console.log("---", obj[selectedMenuButton]);

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
          {<FactsAndTitles />}

          <div className="flex w-full justify-center rounded-[12px]">
            <img
              className="rounded-[12px] w-full"
              src="/src/assets/topBanner.svg"
              alt=""
            />
          </div>
          {
            <TournamentSection
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
            />
          }
          {<Standings />}
        </div>
        <div className="rounded-[12px] gap-5 flex flex-col">
          {<StatsAndPlayer />}
          {
            <TopPlayers
              selectedStat={selectedStat}
              handleTabChangeStat={handleTabChangeStat}
            />
          }
        </div>
      </div>
    </>
  );
}

export default Overview;
