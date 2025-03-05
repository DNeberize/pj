import MatchList from "./MatchListing";
import { useState } from "react";

interface League {
  leagueFlag: string;
  leagueName: string;
  matches: any[];
}

type LeagueMatchesProps = {
  Matches: League[];
};

function LeagueMatches({ Matches }: LeagueMatchesProps) {
  const [openLeagues, setOpenLeagues] = useState<boolean[]>(
    new Array(Matches.length).fill(true)
  );

  const toggleLeague = (index: number) => {
    setOpenLeagues((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <ul>
      {Matches.map((league, index) => (
        <div key={index}>
          <div
            onClick={() => toggleLeague(index)}
            className="inline-grid w-full grid-cols-[9fr_4fr] text-xs bg-[var(--color-secondary)] h-[50px] py-[15px] px-[20px] cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              <img src="/src/assets/Star.svg" alt="Star" />
              <img src={league.leagueFlag} alt={league.leagueName} />
              <h1 className="font-semibold min small-menu-p max-lg:text-xs text-[var(--color-text)]">
                {league.leagueName}
              </h1>
              <img src="/src/assets/Pin.svg" alt="Pin" />
            </div>

            <div className="flex min-w-[170px] justify-between max-lg:justify-end">
              <div className="flex max-lg:hidden">
                <h2 className="text-[var(--color-text)] px-4 border-r-[1px] border-solid border-[var(--color-secondary)]">
                  HT
                </h2>
                <h2 className="px-4 text-[var(--color-text)]">Corners</h2>
              </div>
              <div className="flex mx-1 gap-4 h-[20px]">
                <img
                  src="/src/assets/3Line.svg"
                  className="w-[15px] max-lg:hidden"
                  alt="Menu"
                />
                <img
                  className={`w-[10px] transition-transform duration-500 ${
                    openLeagues[index] ? "rotate-180" : ""
                  }`}
                  src="/src/assets/Vector.svg"
                  alt="Arrow"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              openLeagues[index] ? "max-h-max" : "max-h-0"
            }`}
          >
            <MatchList List={league.matches} IsHomePage={true} />
          </div>
        </div>
      ))}
    </ul>
  );
}

export default LeagueMatches;
