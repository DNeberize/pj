import Matches from "../Matches.json";
import MatchList from "./MatchListing";

function LeagueMatches() {
  return (
    <ul>
      {Matches.map((league, index) => (
        <div key={index}>
          <div className="inline-grid w-full grid-cols-[450px_1fr] text-[12px] bg-[#23262E1A] h-[50px] py-[15px] px-[20px]">
            <div className="flex gap-2 items-center">
              <img src="src/assets/Star.svg" alt="Star" />
              <img src={league.leagueFlag} alt={league.leagueName} />
              <h1 className="font-semibold text-[#23262E]">{league.leagueName}</h1>
              <img src="src/assets/Pin.svg" alt="Pin" />
            </div>

            <div className="flex justify-between">
              <div className="flex">
                <h2 className="text-[#23262E] px-4 border-r-[1px] border-solid border-[#23262E1A]">HT</h2>
                <h2 className="px-4 text-[#23262E]">Corners</h2>
              </div>
              <div className="flex mx-1 gap-4 h-[20px]">
                <img src="src/assets/3Line.svg" className="w-[15px]" alt="Menu" />
                <img className="rotate-180 w-[10px]" src="src/assets/Vector.svg" alt="Arrow" />
              </div>
            </div>
          </div>

          <MatchList List={league.matches} />
        </div>
      ))}
    </ul>
  );
}

export default LeagueMatches;
