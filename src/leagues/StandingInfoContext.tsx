import { createContext } from "react";
interface LeagueContextType {
  standings?: TeamStanding[];
}
interface TeamStanding {
  rank: number;
  team: Team;
  points: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: GoalStats;
  };
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: GoalStats;
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: GoalStats;
  };
  form: string;
}
interface GoalStats {
  for: number;
  against: number;
}

interface Team {
  id: number;
  logo: string;
  name: string;
}

const LeagueInfo = createContext<LeagueContextType>({
  standings: [],
});
export default LeagueInfo;
