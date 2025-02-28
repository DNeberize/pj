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
    id: 0,
  },
  {
    label: "Live (12)",
    id: 1,
  },
  {
    label: "Finished",
    id: 2,
  },
  {
    label: "Schedueld",
    id: 3,
  },
];

function CenterFeed() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (value: number) => {
    setSelectedTab(value);
  };
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-center rounded-[12px]">
          <img
            className="rounded-[12px]"
            src="/src/assets/topBanner.svg"
            alt=""
          />
        </div>
        <div className="bg-[var(--color-bg)] rounded-[8px] text-[var(--color-text)]/70 mt-[20px]">
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
              isLeaguePage={false}
            />
          </div>
          {selectedTab === 0 && (
            <>
              <LeagueMatches Matches={FinisshedMatches} />
              <LeagueMatches Matches={ScheduledMatches} />
              <LeagueMatches Matches={LiveMatches} />
            </>
          )}

          {selectedTab == 1 && <LeagueMatches Matches={LiveMatches} />}
          {selectedTab == 2 && <LeagueMatches Matches={ScheduledMatches} />}
          {selectedTab == 3 && <LeagueMatches Matches={FinisshedMatches} />}
        </div>
      </div>
    </div>
  );
}

export default CenterFeed;
