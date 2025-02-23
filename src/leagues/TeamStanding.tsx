
import React from "react";
interface TeamStanding {
    rank: number;
    team: { id: number; logo: string; name: string };
    points: number;
    all: { played: number; win: number; draw: number; lose: number; goals: { for: number; against: number } };
    form: string;
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

interface TeamStandingsProps {
  data: TeamStanding[];
  
}
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
}
const TeamStandings: React.FC<TeamStandingsProps> = ({ data }) => {
    
  return (
    <>
      {data.map((team, index) => (
        <div
          key={index}
          className="border-b-1 border-solid border-[#23262E1A] grid gap-3 px-5 py-3 grid-cols-[4fr_3fr_4fr]"
        >
          <div className="flex gap-3">
            <span className={`text-[12px] aspect-square w-6 flex justify-center items-center rounded-[100px] ${getRankBadgeClass(team.rank)}`}>{team.rank}</span>
            <img className="h-6" src={team.team.logo} alt={team.team.name} />
            <h3 className="text-[12px]">{team.team.name}</h3>
          </div>
          <div className="flex gap-3 justify-around">
            <h3 className="text-[#23262EB2] flex justify-center text-[12px]">{team.all.played}</h3>
            <h3 className="text-[#3ECC29] flex justify-center text-[12px]">{team.all.win}</h3>
            <h3 className="text-[#FFC21A] flex justify-center text-[12px]">{team.all.draw}</h3>
            <h3 className="text-[#F21818] flex justify-center text-[12px]">{team.all.lose}</h3>
          </div>
          <div className="grid gap-3 grid-cols-[2fr_5fr_1fr]">
            <h3 className="flex text-[12px] justify-center">{team.all.goals.for}</h3>
            <div className="flex text-[12px] justify-end gap-3">
              {team.form.split("").map((e, idx) => (
                <div
                  key={idx}
                  className={`aspect-square w-6 flex justify-center items-center rounded-[100px] ${getBgColor(e)}`}
                >
                  {e}
                </div>
              ))}
            </div>
            <h3 className="flex text-[12px] justify-center">{team.points}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamStandings;
