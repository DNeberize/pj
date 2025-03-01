import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import vector from "@assets/Vector.svg";
import { Dropdown, Space } from "antd";
import DubleVector from "@assets/DubleVector.svg";
import StatsAndPlayer from "./StatsAndPlayer";

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Transfer {
  date: string;
  type: string;
  teams: {
    in: Team;
    out: Team;
  };
}

interface Player {
  name: string;
}

interface TransferData {
  player: Player;
  transfers: Transfer[];
}

interface APIResponse {
  response: {
    team: Team;
  }[];
}

export default function Transfer() {
  const [transfers, setTransfers] = useState<TransferData[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [idTeam, setIdTeam] = useState<number | null>(null);

  const { id } = useParams();

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
    if (idTeam) {
      fetch(`https://v3.football.api-sports.io/transfers?team=${idTeam}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const last20Transfers = data.response.slice(-20);
          setTransfers(last20Transfers);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idTeam]);

  useEffect(() => {
    if (id) {
      fetchTeamsByLeague(Number(id), 2023);
    }
  }, [id]);

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
    <div className="w-full grid gap-5 grid-cols-[20fr_7fr] ">
      <div className="flex-col flex gap-5">
        <div className="bg-[var(--color-bg)] flex justify-between p-5 rounded-[12px] ">
          <h1>Transfer Page</h1>
          <Dropdown
            className="border-1  rounded-[8px] border-solid flex justify-between px-4 py-2 border-[var(--color-secondary)]"
            menu={{ items }}
            trigger={["click"]}
          >
            <a
              className="flex w-full max-w-[150px] text-[var(--color-text)] font-semibold text-xs"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="text-xs text-[var(--color-text)]">
                {idTeam
                  ? teams.find((team) => team.id === idTeam)?.name
                  : "Select Team"}
                <img src={vector} alt="dropdown arrow" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <ul className="bg-[var(--color-bg)] rounded-[12px]">
          {transfers.length > 0 ? (
            transfers.map((transfer, index) => (
              <li
                className="h-15 items-center grid grid-cols-[1fr_1fr_1fr] w-full  border-b-1 border-solid border-[var(--color-secondary)]"
                key={index}
              >
                <div className="flex ml-5 gap-5 items-center ">
                  <p className="text-xs font-semibold text-[var(--color-text)]">
                    {transfer.transfers[0].date}
                  </p>
                  <div>
                    <h3 className="text-xs font-semibold text-[var(--color-text)]">
                      {transfer.player.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text)]">
                      D / Age / Nation
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <img
                    className="h-6"
                    src={transfer.transfers[0].teams.in.logo}
                    alt=""
                  />
                  <img className="h-3" src={DubleVector} alt="" />
                  <img
                    className="h-6"
                    src={transfer.transfers[0].teams.out.logo}
                    alt=""
                  />
                </div>
                <div className="justify-end pr-5 flex">
                  <h2 className="text-purple-600 text-xs justify-right">
                    {transfer.transfers[0].type}
                  </h2>
                </div>
              </li>
            ))
          ) : (
            <p>No transfers available for this team.</p>
          )}
        </ul>
      </div>
      <div className="rounded-[12px] pt-5 gap-6 flex-col bg-[var(--color-bg)]">
        <StatsAndPlayer />
      </div>
    </div>
  );
}
