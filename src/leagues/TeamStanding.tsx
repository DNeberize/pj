import React, { useMemo } from "react";

interface TeamStanding {
  rank: number;
  team: { id: number; logo: string; name: string };
  points: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: { for: number; against: number };
  };
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: { for: number; against: number };
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: { for: number; against: number };
  };
  form: string;
}

interface TeamStandingsProps {
  data: TeamStanding[];
  selectedTab: string;
}

const getBgColor = (e: string): string => {
  switch (e.toLowerCase()) {
    case "w":
      return "bg-[#3ECC29]";
    case "l":
      return "bg-[#F21818]";
    case "d":
      return "bg-[#FFC21A]";
    default:
      return "bg-[#23262EB2]";
  }
};

const getRankBadgeClass = (rank: number) => {
  if (rank < 5) {
    return "bg-[#7F3FFC] text-white";
  } else if (rank === 5) {
    return "bg-[#3ECC29] text-white";
  } else if (rank === 6) {
    return "bg-[#FFC21A] text-white";
  } else {
    return "";
  }
};

const TeamStandings: React.FC<TeamStandingsProps> = ({ data, selectedTab }) => {
  return (
    <>
      {data.map((team) => {
        const stats = useMemo(
          () => team[selectedTab as keyof TeamStanding] as any,
          [team, selectedTab]
        );
        const formArray = team.form ? team.form.split("") : [];

        return (
          <div
            key={team.team.id}
            className="border-b-1 border-solid border-[#23262E1A] grid gap-3 px-5 py-3 max-sm:grid-cols-[4fr_1fr_2fr] grid-cols-[4fr_3fr_4fr]"
          >
            <div className="flex overflow-hidden gap-3">
              <span
                className={`text-xs aspect-square w-6 min-w-6 max-h-6 flex justify-center items-center rounded-[100px] ${getRankBadgeClass(
                  team.rank
                )}`}
              >
                {team.rank}
              </span>
              <img className="h-6" src={team.team.logo} alt={team.team.name} />
              <h3 className="text-xs min-w-8">{team.team.name}</h3>
            </div>
            <div className="flex gap-3 max-sm:justify-end justify-around">
              <h3 className="text-[#23262EB2] flex justify-center text-xs">
                {stats.played}
              </h3>
              <h3 className="text-[#3ECC29] max-sm:hidden flex justify-center text-xs">
                {stats.win}
              </h3>
              <h3 className="text-[#FFC21A] max-sm:hidden flex justify-center text-xs">
                {stats.draw}
              </h3>
              <h3 className="text-[#F21818] max-sm:hidden flex justify-center text-xs">
                {stats.lose}
              </h3>
            </div>
            <div className="grid gap-3 max-sm:grid-cols-[3fr_3fr] grid-cols-[2fr_5fr_1fr]">
              <h3 className="flex text-xs justify-center">{stats.goals.for}</h3>
              <div className="flex text-xs max-sm:hidden justify-between">
                {formArray.map((e, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square w-6 flex justify-center items-center rounded-[100px] ${getBgColor(
                      e
                    )}`}
                  >
                    {e}
                  </div>
                ))}
              </div>
              <h3 className="flex max-sm:justify-start text-xs justify-center">
                {team.points}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(TeamStandings);
