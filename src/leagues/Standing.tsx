import { useContext, useState } from "react";
import TeamStandings from "./TeamStanding";
import LeagueInfo from "./StandingInfoContext";

interface StandingsProps {
  isSchedulePage?: boolean;
}

function Standings({ isSchedulePage = false }: StandingsProps) {
  const [selectedTab, setSelectedTab] = useState<"all" | "home" | "away">(
    "all"
  );

  const handleTabChange = (item: "All" | "Home" | "Away") => {
    setSelectedTab(item.toLowerCase() as "all" | "home" | "away");
  };

  const { standings } = useContext(LeagueInfo);

  return (
    <div className="w-full">
      <div className="flex bg-[var(--color-bg)] rounded-[12px] flex-col justify-between">
        <div className="flex p-4 justify-between w-full flex-row">
          <h2 className="text-[var(--color-text)] flex items-center font-bold text-sm mb-0">
            Standings
          </h2>
          <div
            className={`bg-[var(--color-primary)] p-1 rounded-[12px] flex w-auto ${
              isSchedulePage && "hidden"
            }`}
          >
            {(["All", "Home", "Away"] as const).map((item, index) => (
              <button
                key={index}
                className={`rounded-[8px] py-[8px] text-xs px-[1rem] cursor-pointer font-semibold w-full max-w-[440px] transition-colors duration-500 ease-in-out ${
                  selectedTab === item.toLowerCase()
                    ? "bg-[var(--color-bg)] text-[var(--color-text)]"
                    : "[var(--color-text-light)]"
                }`}
                onClick={() => handleTabChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`border-b-1 border-solid border-[var(--color-secondary)] grid gap-3 px-5 py-3 max-sm:grid-cols-[4fr_1fr_2fr] grid-cols-[4fr_3fr_4fr]`}
        >
          <div className="flex pl-2 gap-3">
            <span className="text-xs">#</span>
            <h3 className="text-xs">Team</h3>
          </div>
          <div
            className={`flex gap-3 max-sm:justify-end justify-around ${
              isSchedulePage && "hidden"
            }`}
          >
            <h3 className="[var(--color-text-light)] flex justify-center text-xs">
              P
            </h3>
            <h3 className="text-[#3ECC29] max-sm:hidden flex justify-center text-xs">
              W
            </h3>
            <h3 className="text-[#FFC21A] max-sm:hidden flex justify-center text-xs">
              D
            </h3>
            <h3 className="text-[#F21818] max-sm:hidden flex justify-center text-xs">
              L
            </h3>
          </div>
          <div
            className={`grid gap-3 max-sm:grid-cols-[1fr_1fr] grid-cols-[2fr_5fr_1fr]
             `}
          >
            <h3
              className={`${
                isSchedulePage && "hidden"
              } flex text-xs justify-center`}
            >
              Goals
            </h3>
            <div
              className={`flex text-xs max-sm:hidden justify-between ${
                isSchedulePage && "hidden"
              }`}
            >
              Last 5
            </div>
            <h3 className="flex text-xs max-sm:justify-start justify-center">
              Pts
            </h3>
          </div>
        </div>

        <TeamStandings
          data={standings || []}
          selectedTab={selectedTab}
          isSchedulePage={isSchedulePage}
        />
      </div>
    </div>
  );
}

export default Standings;
