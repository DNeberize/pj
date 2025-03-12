import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[var(--color-bg)] p-5 w-full rounded-[12px] grid gap-5 transition-all duration-500">
      <h2 className="text-xs text-[var(--color-text)] font-bold">
        About Manchester City
      </h2>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_0fr]"
        } overflow-hidden`}
      >
        <p className="text-xs text-[var(--color-text-light)]">
          Manchester City live score, schedule, match results and the latest
          standings. Manchester City previous game was against Brentford in
          English Premier League on 2024/09/14 UTC, match ended with result 2:1.
          Manchester City is going to play their next match on 2024/09/18 UTC
          against Inter Milan in English Premier League. When the match begins,
          you will be able to follow Manchester City vs Inter Milan live score,
          H2H, standings, minute-by-minute updated live results, and match
          statistics.
        </p>
        <div
          className={`overflow-hidden  ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } group`}
        >
          {isExpanded && (
            <p className="text-xs text-[var(--color-text-light)] mt-2">
              Football live scores page on Flashscore.com offers all the latest
              football results from EPL 2024 and more than 100+ football leagues
              and tournaments all around the world including the most famous:
              LaLiga, Serie A, Bundesliga, UEFA Champions League, and also other
              leagues such as MLS or Saudi Pro League. Follow all the latest
              football results on Flashscore.com where you can find previews of
              football matches, detailed statistics (shots on goal, ball
              possession, expected goals (xG), corner stats, yellow and red
              cards, fouls, etc.).
            </p>
          )}
        </div>
      </div>
      <h2
        onClick={handleToggle}
        className="text-xs text-[#7F3FFC] font-bold cursor-pointer"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </h2>
    </div>
  );
}
