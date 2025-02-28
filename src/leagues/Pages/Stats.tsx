import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopPlayerDatas from "./page_components/TopPlayers";
import FactsAndTitles from "./page_components/FactsAndTitles";
import halad from "@assets/Halad.svg";
import vector from "@assets/Vector.svg";
import { Dropdown, Space } from "antd";

interface Player {
  photo: string;
  name: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface APIResponse {
  response: {
    team: Team;
  }[];
}

export default function Stats() {
  const { id } = useParams();
  const [selectedStat, setSelectedStat] = useState("Goal");
  const [playerData, setPlayerData] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [idTeam, setIdTeam] = useState<number | null>(null);

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  const fetchTeamsByLeague = async (leagueId: number, season: number) => {
    const url = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`;
    const options = {
      method: "GET",
      headers: {
        "x-apisports-key": import.meta.env.VITE_API_KEY,
      },
    };

    try {
      const response = await fetch(url, options);
      const data: APIResponse = await response.json();
      const teamData = data.response.map((entry) => entry.team);
      setTeams(teamData);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    if (teams.length > 0) {
      setIdTeam(teams[0].id);
    }
  }, [teams]);

  useEffect(() => {
    console.log("Current Player Data:", playerData);
  }, [playerData]);

  const fetchStandings = async () => {
    if (!idTeam) return;

    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/players?team=${idTeam}&season=2023`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      // .env
      // react svg
      // redux

      if (!response.ok) {
        throw new Error("Failed to fetch standings");
      }
      const data = await response.json();

      const formattedPlayers = data.response.map((player: any) => ({
        name: `${player.player.name} ${player.player.lastname}`,
        photo: player.player.photo,
      }));

      setPlayerData(formattedPlayers);
    } catch (error) {
      console.error("Error fetching standings:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTeamsByLeague(Number(id), 2023);
    }
  }, [id]);

  useEffect(() => {
    if (idTeam !== null) {
      fetchStandings();
    }
  }, [idTeam]);

  useEffect(() => {
    console.log("Current Teams:", teams);
  }, [teams]);

  const items = teams.map((e) => ({
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex max-h-6 w-full px-0.5 justify-between"
        onClick={(event) => {
          event.preventDefault();
          setIdTeam(e.id);
        }}
      >
        {e.name}
        <img className="w-5 h-5" src={e.logo} alt={e.name} />
      </a>
    ),
    key: e.id,
  }));

  return (
    <div className="grid w-full gap-6 grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      <div className="rounded-[12px] pt-5 gap-6 flex-col bg-[var(--color-bg)]">
        <h2 className="font-bold ml-5 pb-5 flex items-center text-[14px] text-[var(--color-text)]">
          Stats 23/24
        </h2>
        <div className="flex w-full max-w-[50%] min-w-[280px] mx-5 gap-5">
          <Dropdown
            className="border-1 rounded-[8px] border-solid flex justify-between px-4 py-2 border-[var(--color-secondary)]"
            menu={{ items }}
            trigger={["click"]}
          >
            <a
              className="flex w-full text-[var(--color-text)] font-semibold text-xs"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-full flex justify-between">
                Goals
                <img src={vector} alt="dropdown arrow" />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            className="border-1 rounded-[8px] border-solid flex justify-between px-4 py-2 border-[var(--color-secondary)]"
            menu={{ items }}
            trigger={["click"]}
          >
            <a
              className="flex text-xs font-semibold text-[var(--color-text)] w-full"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-full flex justify-between">
                Select Team
                <img src={vector} alt="dropdown arrow" />
              </Space>
            </a>
          </Dropdown>
        </div>
        {playerData.map((e, index) => (
          <div
            key={index}
            className="flex w-full border-b-1 items-center justify-between h-12 border-[var(--color-secondary)]"
          >
            <div className="flex gap-2 pl-5">
              <span className="flex text-xs items-center">{index + 1}</span>
              <img
                className="h-6 w-6 rounded-[45px]"
                src={e.photo}
                alt={`${e.name} photo`}
              />
              <h2 className="items-center font-semibold text-xs flex">
                {e.name}
              </h2>
            </div>
            <div className="text-purple-500 pr-5">9</div>
          </div>
        ))}
      </div>
      <div className="flex-col flex gap-5">
        <FactsAndTitles TitleHolderOnly={true} />
        <TopPlayerDatas
          selectedStat={selectedStat}
          handleTabChangeStat={handleTabChangeStat}
        />
      </div>
    </div>
  );
}
