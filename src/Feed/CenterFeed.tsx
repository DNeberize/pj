import { useState } from "react";
import FeedMenu from "./FeedMenu";
import LeagueMatches from "./LeagueMatches";
import LiveMatches from "../LiveMatces.json";
import ScheduledMatches from "../ScheduledMatches.json";
import FinisshedMatches from "../FinishedMatches.json";

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
            src="src/assets/topBanner.svg"
            alt=""
          />
        </div>
        <div className="bg-white rounded-[8px] text-[#23262E]/70 mt-[20px]">
          <FeedMenu
            selectedTab={selectedTab}
            handleTabChange={handleTabChange}
          />
          {(selectedTab === "All Matches" || selectedTab === "All") && (
            <>
              <LeagueMatches Matches={FinisshedMatches} />
              <LeagueMatches Matches={ScheduledMatches} />
              <LeagueMatches Matches={LiveMatches} />
            </>
          )}

          {selectedTab == "Live (12)" && (
            <LeagueMatches Matches={LiveMatches} />
          )}
          {selectedTab == "Scheduled" && (
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
