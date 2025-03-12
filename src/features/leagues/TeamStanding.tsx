import React from "react";
import { ConfigProvider, Flex, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import GorisDila from "@assets/Clubs/FC Dila Gori.png";

const buttonWidth = 80;

// Define TypeScript interfaces for props and team data
interface Team {
  id: number;
  logo: string;
  name: string;
}

interface Goals {
  for: number;
  against: number;
}

interface TeamStatistics {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

interface TeamStanding {
  rank: number;
  team: Team;
  points: number;
  all: TeamStatistics;
  home: TeamStatistics;
  away: TeamStatistics;
  form: string;
}

interface TeamStandingsProps {
  data: TeamStanding[];
  selectedTab: "all" | "home" | "away";
  isSchedulePage?: boolean;
}

const TeamStandings: React.FC<TeamStandingsProps> = ({
  data,
  selectedTab,
  isSchedulePage = false,
}) => {
  const location = useLocation(); // Access the current location

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
    if (isSchedulePage) {
      return "";
    }
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

  return (
    <>
      {data.map((team) => {
        const formArray = team.form ? team.form.split("") : [];
        const obj = React.useMemo(
          () =>
            Array(5).fill(
              <div className="flex gap-3 justify-center">
                <div className="flex flex-col justify-center items-center">
                  {team.team.name}
                  <img
                    className="max-w-5"
                    src={team.team.logo}
                    alt={team.team.name}
                  />
                </div>
                <p className="flex items-center">vs</p>
                <div className="flex flex-col justify-center items-center">
                  გორის დილა
                  <img className="max-w-5" src={GorisDila} alt="" />
                </div>
              </div>
            ),
          [team, GorisDila]
        );

        const teamLink = `/${location.pathname.split("/")[1]}/${
          location.pathname.split("/")[2]
        }/${location.pathname.split("/")[3]}/team/${team.team.id}`;

        return (
          <div
            key={team.team.id}
            className={`border-b-1 border-solid border-[var(--color-secondary)] grid gap-3 px-5 py-3 max-sm:grid-cols-[4fr_1fr_2fr] grid-cols-${
              isSchedulePage === true ? "[4fr_1fr]" : "[4fr_3fr_4fr]"
            }`}
          >
            <Link to={teamLink} className="flex jj overflow-hidden gap-3">
              <span
                className={`text-xs aspect-square w-6 min-w-6 max-h-6 flex justify-center items-center rounded-[100px] ${getRankBadgeClass(
                  team.rank
                )}`}
              >
                {team.rank}
              </span>
              <img className="h-6" src={team.team.logo} alt={team.team.name} />
              <h3 className="text-xs flex items-center min-w-8">
                {team.team.name}
              </h3>
            </Link>
            <div
              className={`flex gap-3 max-sm:justify-end justify-around ${
                isSchedulePage && "hidden"
              }`}
            >
              <h3 className="[var(--color-text-light)] flex items-center justify-center text-xs">
                {team[selectedTab].played}
              </h3>
              <h3 className="text-[#3ECC29] max-sm:hidden items-center flex justify-center text-xs">
                {team[selectedTab].win}
              </h3>
              <h3 className="text-[#FFC21A] max-sm:hidden items-center flex justify-center text-xs">
                {team[selectedTab].draw}
              </h3>
              <h3 className="text-[#F21818] max-sm:hidden items-center flex justify-center text-xs">
                {team[selectedTab].lose}
              </h3>
            </div>
            <div
              className={`grid gap-3 max-sm:grid-cols-[1fr_1fr] grid-cols-${
                isSchedulePage === true
                  ? "[1fr] flex justify-end"
                  : "[2fr_5fr_1fr]"
              }`}
            >
              <h3
                className={`flex items-center ${
                  isSchedulePage && "hidden"
                } flex text-xs justify-center`}
              >
                {team[selectedTab].goals.for}
              </h3>
              <div
                className={`flex text-xs max-sm:hidden  ${
                  isSchedulePage && "hidden"
                }`}
              >
                <ConfigProvider
                  button={{ style: { width: buttonWidth, margin: 4 } }}
                >
                  <Flex
                    vertical
                    justify="center"
                    align="center"
                    className="demo w-full"
                  >
                    <Flex
                      align="center"
                      style={{ whiteSpace: "nowrap" }}
                      className="flex justify-between w-full"
                    >
                      {formArray.map((e, idx) => (
                        <Tooltip placement="top" key={idx} title={obj[idx]}>
                          <div
                            key={idx}
                            className={`aspect-square w-6 flex justify-center cursor-pointer items-center rounded-[100px] ${getBgColor(
                              e
                            )}`}
                          >
                            {e}
                          </div>
                        </Tooltip>
                      ))}
                    </Flex>
                  </Flex>
                </ConfigProvider>
              </div>
              <h3 className="flex max-sm:justify-start items-center text-xs justify-center">
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
