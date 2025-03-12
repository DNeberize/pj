import TopPlayers from "./overview_pages/TopPlayers";
import { useState } from "react";
import playerData from "../../data/Players.json";

interface Player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export default function TeamStanding() {
  const playersByPosition: Record<string, Player[]> = {
    Attacker: [],
    Midfielder: [],
    Defender: [],
    Goalkeeper: [],
  };

  function sortPlayers() {
    playerData.response[0].players.map((e: Player) => {
      switch (e.position) {
        case "Attacker":
          playersByPosition.Attacker.push(e);
          break;
        case "Midfielder":
          playersByPosition.Midfielder.push(e);
          break;
        case "Defender":
          playersByPosition.Defender.push(e);
          break;
        case "Goalkeeper":
          playersByPosition.Goalkeeper.push(e);
          break;
      }
    });
  }

  sortPlayers();
  console.log(playersByPosition);

  const [selectedStat, setSelectedStat] = useState<string>("Goal");

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  return (
    <div className="hidden lg:grid w-full gap-6 grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      <div className="flex flex-col gap-5">
        <div className="w-full pt-5 bg-[var(--color-bg)] rounded-[12px]">
          <h2 className="text-[14px] px-5 pb-3 text-[var(--color-text)] font-bold">
            Strikers
          </h2>
          <ul className="w-full">
            <li className="grid grid-cols-6 px-5 py-1 border-b-1 border-solid border-[var(--color-secondary)] ">
              <h3 className="text-xs flex items-center text-[var(--color-text-light)] grid-1">
                Player
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Age
              </h3>

              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Annual Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Weekly Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Market value
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Contract untill
              </h3>
            </li>
            {playersByPosition.Attacker.map((e, index) => {
              return (
                <li
                  key={index}
                  className="grid grid-cols-6 px-5 py-1 h-19 items-center border-b-1 border-solid border-[var(--color-secondary)] "
                >
                  <div className="flex items-center  grid-1 gap-2">
                    <img className="rounded-full h-8" src={e.photo} alt="" />
                    <div>
                      <h3 className="text-xs  text-[var(--color-text-light)]">
                        {e.name}
                      </h3>
                      <p className="text-[10px] text-[var(--color-text-light)]">
                        #14 eng
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    {e.age}
                  </h3>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Annual Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Weekly Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Market value
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Contract untill
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full pt-5 bg-[var(--color-bg)] rounded-[12px]">
          <h2 className="text-[14px] px-5 pb-3 text-[var(--color-text)] font-bold">
            Midfielder
          </h2>
          <ul className="w-full">
            <li className="grid grid-cols-6 px-5 py-1 border-b-1 border-solid border-[var(--color-secondary)] ">
              <h3 className="text-xs flex items-center text-[var(--color-text-light)] grid-1">
                Player
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Age
              </h3>

              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Annual Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Weekly Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Market value
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Contract untill
              </h3>
            </li>
            {playersByPosition.Midfielder.map((e, index) => {
              return (
                <li
                  key={index}
                  className="grid grid-cols-6 px-5 py-1 h-19 items-center border-b-1 border-solid border-[var(--color-secondary)] "
                >
                  <div className="flex items-center  grid-1 gap-2">
                    <img className="rounded-full h-8" src={e.photo} alt="" />
                    <div>
                      <h3 className="text-xs  text-[var(--color-text-light)]">
                        {e.name}
                      </h3>
                      <p className="text-[10px] text-[var(--color-text-light)]">
                        #14 eng
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    {e.age}
                  </h3>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Annual Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Weekly Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Market value
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Contract untill
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full pt-5 bg-[var(--color-bg)] rounded-[12px]">
          <h2 className="text-[14px] px-5 pb-3 text-[var(--color-text)] font-bold">
            Defender
          </h2>
          <ul className="w-full">
            <li className="grid grid-cols-6 px-5 py-1 border-b-1 border-solid border-[var(--color-secondary)] ">
              <h3 className="text-xs flex items-center text-[var(--color-text-light)] grid-1">
                Player
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Age
              </h3>

              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Annual Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Weekly Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Market value
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Contract untill
              </h3>
            </li>
            {playersByPosition.Defender.map((e, index) => {
              return (
                <li
                  key={index}
                  className="grid grid-cols-6 px-5 py-1 h-19 items-center border-b-1 border-solid border-[var(--color-secondary)] "
                >
                  <div className="flex items-center  grid-1 gap-2">
                    <img className="rounded-full h-8" src={e.photo} alt="" />
                    <div>
                      <h3 className="text-xs  text-[var(--color-text-light)]">
                        {e.name}
                      </h3>
                      <p className="text-[10px] text-[var(--color-text-light)]">
                        #14 eng
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    {e.age}
                  </h3>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Annual Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Weekly Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Market value
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Contract untill
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full pt-5 bg-[var(--color-bg)] rounded-[12px]">
          <h2 className="text-[14px] px-5 pb-3 text-[var(--color-text)] font-bold">
            Goalkeeper
          </h2>
          <ul className="w-full">
            <li className="grid grid-cols-6 px-5 py-1 border-b-1 border-solid border-[var(--color-secondary)] ">
              <h3 className="text-xs flex items-center text-[var(--color-text-light)] grid-1">
                Player
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Age
              </h3>

              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Annual Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Weekly Salary
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Market value
              </h3>
              <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                Contract untill
              </h3>
            </li>
            {playersByPosition.Goalkeeper.map((e, index) => {
              return (
                <li
                  key={index}
                  className="grid grid-cols-6 px-5 py-1 h-19 items-center border-b-1 border-solid border-[var(--color-secondary)] "
                >
                  <div className="flex items-center  grid-1 gap-2">
                    <img className="rounded-full h-8" src={e.photo} alt="" />
                    <div>
                      <h3 className="text-xs  text-[var(--color-text-light)]">
                        {e.name}
                      </h3>
                      <p className="text-[10px] text-[var(--color-text-light)]">
                        #14 eng
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    {e.age}
                  </h3>

                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Annual Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Weekly Salary
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Market value
                  </h3>
                  <h3 className="text-xs flex justify-center items-center text-[var(--color-text-light)] grid-1">
                    Contract untill
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {
        <TopPlayers
          selectedStat={selectedStat}
          handleTabChangeStat={handleTabChangeStat}
        />
      }
    </div>
  );
}
