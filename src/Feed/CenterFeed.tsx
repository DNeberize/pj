import { useState } from "react";
import FeedMenu from "./FeedMenu";
import LeagueMatches from "./LeagueMatches";
import LiveMatches from "../jsonfiles.json/LiveMatces.json";
import ScheduledMatches from "../jsonfiles.json/ScheduledMatches.json";
import FinisshedMatches from "../jsonfiles.json/FinishedMatches.json";
import MobileFeedMenu from "./MobileFeedMenu";

const MenuItems = [
  {
    label: "All Matches",
    id: "0",
  },
  {
    label: "Live (12)",
    id: "1",
  },
  {
    label: "Finished",
    id: "2",
  },
  {
    label: "Schedueld",
    id: "3",
  },
];

function CenterFeed() {
  const [selectedTab, setSelectedTab] = useState<string>("All Matches");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };
  console.log(selectedTab);
  return (
    <div>
      <div className="w-full max-w-1024-padding">
        <div className="flex justify-center rounded-[12px]">
          <img
            className="rounded-[12px]"
            src="/src/assets/topBanner.svg"
            alt=""
          />
        </div>
        <div className="bg-white rounded-[8px] text-[#23262E]/70 mt-[20px]">
          <div className="jemala grid grid-cols-[12fr_4fr] max-lg:flex gap-8 p-[20px] mb-4">
            <FeedMenu
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
              MenuItems={MenuItems}
            />
            <MobileFeedMenu
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
              MenuItems={MenuItems}
            />
          </div>
          {selectedTab === "All Matches" && (
            <>
              <LeagueMatches Matches={FinisshedMatches} />
              <LeagueMatches Matches={ScheduledMatches} />
              <LeagueMatches Matches={LiveMatches} />
            </>
          )}

          {selectedTab == "Live (12)" && (
            <LeagueMatches Matches={LiveMatches} />
          )}
          {selectedTab == "Schedueld" && (
            <LeagueMatches Matches={ScheduledMatches} />
          )}
          {selectedTab == "Finished" && (
            <LeagueMatches Matches={FinisshedMatches} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CenterFeed;
