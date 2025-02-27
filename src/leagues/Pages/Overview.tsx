import "../../index.css";
import { useState } from "react";
import Standings from "../Standing";
import MobileFeedMenu from "../../Feed/MobileFeedMenu";
import Stages from "./page_components/Stages";
import FactsAndTitles from "./page_components/FactsAndTitles";
import StatsAndPlayer from "./page_components/StatsAndPlayer";
import TopPlayers from "./page_components/TopPlayers";
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
    if (selectedItem) {
      setSelectedTab(selectedItem.id);
    }
  };

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  const handleTabChange = (label: number) => {
    setSelectedTab(label);
  };

  let obj: TabComponents = {
    0: <Stages selectedTab={selectedTab} handleTabChange={handleTabChange} />,
    1: <FactsAndTitles TitleHolderOnly={false} />,
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
          {<FactsAndTitles TitleHolderOnly={false} />}

          <div className="flex w-full justify-center rounded-[12px]">
            <img
              className="rounded-[12px] w-full"
              src="/src/assets/topBanner.svg"
              alt=""
            />
          </div>
          {
            <Stages
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
            />
          }
          {<Standings isSchedulePage={false} />}
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
