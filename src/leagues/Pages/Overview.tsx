import "../../index.css";
import { useState } from "react";
import Standings from "../Standing";
import MobileFeedMenu from "../../Feed/MobileFeedMenu";
import TournamentSection from "./Stages";
import FactsAndTitles from "./FactsAndTitles";
import StatsAndPlayer from "./StatsAndPlayer";
import TopPlayers from "./TopPlayers";

const MenuItems = [
  { label: "Stages", id: "0" },
  { label: "Info", id: "1" },
  { label: "Standing", id: "2" },
  { label: "Top Player", id: "3" },
];

function Overview() {
  const [selectedTab, setSelectedTab] = useState(38);
  const [selectedMenuButton, setSelectedMenu] = useState<string>("Stages");
  const [selectedStat, setSelectedStat] = useState("Goal");

  const handleMenuChange = (value: string) => {
    setSelectedMenu(value);
    const selectedItem = MenuItems.find((item) => item.label === value);
    if (selectedItem) {
      setSelectedTab(Number(selectedItem.id));
    }
  };

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  const handleTabChange = (label: number) => {
    setSelectedTab(label);
  };

  return (
    <>
      <MobileFeedMenu
        selectedTab={selectedMenuButton}
        handleTabChange={handleMenuChange}
        MenuItems={MenuItems}
        isLeaguePage={true}
      />

      <div className="w-full gap-6 grid grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
        <div className="gap-6 flex flex-col">
          {selectedMenuButton.toLowerCase() === "info" && <FactsAndTitles />}
          <div className="flex w-full justify-center rounded-[12px]">
            <img
              className="rounded-[12px] w-full"
              src="/src/assets/topBanner.svg"
              alt=""
            />
          </div>
          {selectedMenuButton.toLowerCase() === "stages" && (
            <TournamentSection
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
            />
          )}
          {selectedMenuButton.toLowerCase() === "standing" && <Standings />}
        </div>
        <div className="rounded-[12px] gap-5 flex flex-col">
          {selectedMenuButton.toLowerCase() === "info" && <StatsAndPlayer />}
          {selectedMenuButton.toLowerCase() === "top player" && (
            <TopPlayers
              selectedStat={selectedStat}
              handleTabChangeStat={handleTabChangeStat}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Overview;
