import { Flex, Progress } from "antd";
import "../../index.css";
import MatchList from "../../Feed/MatchListing";
import Matches from "../../jsonfiles.json/Matches.json";
import { useState } from "react";
import Standings from "../Standing";
import vec from "@assets/Vector.svg";
import mancity from "@assets/Clubs/ManchesterCity.svg";
import Chart from "@assets/Chart.svg";
import Shirt from "@assets/Shirt.svg";
import Halad from "@assets/Halad.svg";
import Leicester from "@assets/Leicester City.svg";
import MobileFeedMenu from "../../Feed/MobileFeedMenu";
const MenuItems = [
  { label: "Stages", id: "0" },
  { label: "Info", id: "1" },
  { label: "Standing", id: "2" },
  { label: "Top Player", id: "3" },
];

function Overview() {
  const [selectedTab, setSelectedTab] = useState(38);

  const [selectedMenuButton, setSelectedMenu] = useState<string>("Stages");

  const handleMenuChange = (value: string) => {
    setSelectedMenu(value);
    const selectedItem = MenuItems.find((item) => item.label === value);
    if (selectedItem) {
      setSelectedTab(Number(selectedItem.id));
    }
  };
  const [selectedStat, setSelectedStat] = useState("Goal");

  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };

  const handleTabChange = (label: number) => {
    setSelectedTab(label);
  };

  return (
    <>
      <MobileFeedMenu
        selectedTab={selectedMenuButton}
        handleTabChange={handleMenuChange}
        MenuItems={MenuItems}
        isLeaguePage={true}
      />

      <div className="w-full gap-6 grid grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
        <div className="gap-6 flex flex-col">
          <div className="rounded-[12px] gap-6 grid grid-cols-[1fr_1fr] max-sm:grid-cols-[1fr] ">
            <div className="bg-white p-5 rounded-[12px]">
              <h2 className="text-[#23262E]  font-bold text-sm">Facts</h2>
              <div className="gap-4 flex flex-col">
                <div className="grid w-full grid-cols-[1fr_1fr_1fr] gap-4">
                  <div className="flex flex-col justify-center items-center py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                    <h3 className="text-xs flex justify-center text-[#23262EB2]">
                      Division level
                    </h3>
                    <p className="text-xs font-bold text-[#23262E]">1</p>
                  </div>
                  <div className="flex flex-col justify-center items-center py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                    <h3 className="text-xs text-[#23262EB2]">Rounds</h3>
                    <p className="text-xs font-bold text-[#23262E]">38</p>
                  </div>
                  <div className="flex flex-col justify-center items-center py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                    <h3 className="text-xs text-[#23262EB2]">Yellow cards</h3>
                    <p className="text-xs font-bold text-[#23262E]">2</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center w-full py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                  <h3 className="text-xs text-[#23262EB2]">Red cards</h3>
                  <p className="text-xs font-bold text-[#23262E]">2</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[12px] py-5 ">
              <h2 className="text-[#23262E] px-5  font-bold text-sm">
                Title Holder
              </h2>
              <div className="grid h-full grid-rows-[1fr_1fr]">
                <div className="flex px-5 cursor-pointer items-center border-b-1 border-solid border-[#23262E1A] justify-between">
                  <div className="flex w-full gap-2">
                    <img src={mancity} alt="manChity" />
                    <div>
                      <h3 className="text-xs text-[#23262E]">
                        Manchester City
                      </h3>
                      <p className="text-[#23262EB2] text-xs">
                        Title Holder (10)
                      </p>
                    </div>
                  </div>
                  <img className="-rotate-90" src={vec} alt="" />
                </div>
                <div className="flex px-5 cursor-pointer  items-center justify-between">
                  <div className="flex w-full gap-2">
                    <img src={mancity} alt="manChity" />
                    <div>
                      <h3 className="text-xs text-[#23262E]">
                        Manchester City
                      </h3>
                      <p className="text-[#23262EB2] text-xs">
                        Title Holder (10)
                      </p>
                    </div>
                  </div>
                  <img className="-rotate-90" src={vec} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center rounded-[12px]">
            <img
              className="rounded-[12px] w-full"
              src="/src/assets/topBanner.svg"
              alt=""
            />
          </div>
          <div className="bg-white rounded-[12px] w-full p-4">
            <h2 className="text-[#23262E] mb-3 font-bold text-sm">
              Tournament status
            </h2>
            <Flex gap="small" vertical>
              <Progress
                className="custom-progress"
                size={{ height: 16 }}
                percent={21}
                showInfo={true}
              />
            </Flex>
            <p className="flex text-xs font-semibold  py-3  text-[#23262EB2]   ">
              2024/2025
            </p>
          </div>
          <div className="bg-white rounded-[12px] flex flex-col gap-y-6 px-5 w-full pt-4">
            <h2 className="text-[#23262E] -mb-2 font-bold text-sm">
              Tournament status
            </h2>
            <div className="flex flex-wrap gap-2 max-w-[1000px]">
              {Array.from({ length: 38 }, (_, index) => index + 1).map(
                (item) => (
                  <button
                    key={item}
                    className={`mobile-menu-p-sizedown min-w-[50px] py-[12px]  text-xs rounded-[8px] cursor-pointer font-semibold 
            px-[1rem] flex items-center border-1 border-solid border-[#23262E1A]  justify-center max-w-440-shrink mobile-menu-p-sizedown transition-colors duration-500 ease-in-out
            ${
              selectedTab === item
                ? " bg-[#7F3FFC] text-white"
                : "bg-[#F7F8FA] text-[#23262EB2]"
            }`}
                    onClick={() => handleTabChange(item)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <MatchList IsHomePage={false} List={Matches} />
          </div>

          <Standings />
        </div>
        <div className="rounded-[12px]  gap-5 flex flex-col">
          <div className="bg-white  flex px-5 py-4 flex-col  rounded-[12px]">
            <h3 className="text-sm pb-2 font-bold flex text-[#23262E]">
              <img src={Chart} alt="" />
              Prem Stats
            </h3>
            <div className="flex justify-between border-b-1 py-3 border-solid border-[#23262E1A]">
              <div className="flex gap-2 items-center">
                <img src={Shirt} alt="Shirt" />
                <p className="text-xs text-[#23262EB2]">Player</p>
              </div>
              <p className="text-xs font-bold">637</p>
            </div>
            <div className="flex justify-between border-b-1 py-3  border-solid border-[#23262E1A]">
              <div className="flex gap-2 items-center">
                <img src={Shirt} alt="Shirt" />
                <p className="text-xs text-[#23262EB2]">Foreign Player</p>
              </div>
              <p className="text-xs font-bold">402</p>
            </div>
            <div className="flex justify-between border-b-1 py-3  border-solid border-[#23262E1A]">
              <div className="flex gap-2 items-center">
                <img src={Shirt} alt="Shirt" />
                <p className="text-xs text-[#23262EB2]">Number of teams</p>
              </div>
              <p className="text-xs font-bold">20</p>
            </div>
            <div className="flex justify-between pt-3">
              <div className="flex gap-2 items-center">
                <img src={Shirt} alt="Shirt" />
                <p className="text-xs text-[#23262EB2]">Total market value</p>
              </div>
              <p className="text-xs text-[#7F3FFC] font-bold">€ 11.7857B</p>
            </div>
          </div>
          <div className="bg-white  flex  py-4 flex-col  rounded-[12px]">
            <div className="pb-5 border-b-1 border-solid border-[#23262E1A]">
              <h3 className="text-sm pb-1 px-5 font-bold flex text-[#23262E]">
                Most valuable player
              </h3>
              <div className="flex px-5 items-center justify-between pt-3">
                <div className="flex gap-2 items-center">
                  <img src={Halad} alt="Shirt" />
                  <div>
                    <p className="text-sm font-bold text-[#23262E]">
                      Erling Braut Haland
                    </p>
                    <p className="text-xs  text-[23262EB2]">Manchester City</p>
                  </div>
                </div>
                <p className="text-xs text-[#7F3FFC] font-bold">€ 180M</p>
              </div>
            </div>
            <div className="px-5 flex flex-col gap-2 pt-2">
              <h3 className="text-xs  font-bold flex text-[#23262E]">
                Most valuable player
              </h3>
              <div className="flex items-center gap-2">
                <img src={Leicester} alt="Leicester" />
                <p className="text-[#23262E] text-xs">Leicester City</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Leicester} alt="Leicester" />
                <p className="text-[#23262E] text-xs">Leicester City</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Leicester} alt="Leicester" />
                <p className="text-[#23262E] text-xs">Leicester City</p>
              </div>
            </div>
          </div>
          <div className="bg-white  flex  pt-4 flex-col  rounded-[12px]">
            <div className="flex items-center justify-between px-5">
              <h3 className="text-sm  font-bold flex text-[#23262E]">
                Most valuable player
              </h3>
              <div className="bg-[#F7F8FA] p-1 rounded-[12px] flex w-full sm:w-auto">
                {["Goal", "Assist"].map((item, index) => (
                  <button
                    key={index}
                    className={`rounded-[8px] text-xs px-2 py-1 cursor-pointer font-semibold w-full sm:w-auto max-w-[440px] transition-colors duration-500 ease-in-out ${
                      selectedStat === item
                        ? "bg-white text-[#23262E]"
                        : "text-[#23262EB2]"
                    }`}
                    onClick={() => handleTabChangeStat(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center pb-3 border-b-1 border-solid border-[#23262E1A]">
              <p className="text-[#23262EB2] text-xs ">#</p>
              <div>
                <p className="text-[#23262EB2] text-xs">Players</p>
              </div>
              <p className="text-[#23262EB2] text-xs ">Matches</p>
              <p className="text-[#23262EB2] text-xs ">Goals</p>
            </div>
            <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center py-3 border-b-1 border-solid border-[#23262E1A]">
              <p className="text-[#23262E] text-xs ">1</p>
              <div className="flex gap-2">
                <img className="max-w-[24px]" src={Halad} alt="halad" />
                <p className="text-[#23262E] font-semibold text-xs">
                  Erling Braut Håland
                </p>
              </div>
              <p className="text-[#23262E] flex justify-center text-xs ">4</p>
              <p className="text-[#23262E] flex justify-center text-xs ">1</p>
            </div>
            <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center py-3 border-b-1 border-solid border-[#23262E1A]">
              <p className="text-[#23262E] text-xs ">1</p>
              <div className="flex gap-2">
                <img className="max-w-[24px]" src={Halad} alt="halad" />
                <p className="text-[#23262E] font-semibold text-xs">
                  Erling Braut Håland
                </p>
              </div>
              <p className="text-[#23262E] flex justify-center text-xs ">4</p>
              <p className="text-[#23262E] flex justify-center text-xs ">1</p>
            </div>
            <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center py-3 border-b-1 border-solid border-[#23262E1A]">
              <p className="text-[#23262E] text-xs ">1</p>
              <div className="flex gap-2">
                <img className="max-w-[24px]" src={Halad} alt="halad" />
                <p className="text-[#23262E] font-semibold text-xs">
                  Erling Braut Håland
                </p>
              </div>
              <p className="text-[#23262E] flex justify-center text-xs ">4</p>
              <p className="text-[#23262E] flex justify-center text-xs ">1</p>
            </div>
            <button className="w-full h-[40px] text-xs bg-[#7F3FFC] text-white flex justify-center items-center rounded-b-[8px] ">
              See-All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
