import { Flex, Progress } from "antd";
import "../index.css";
import MatchList from "../Feed/MatchListing";
import Matches from "../jsonfiles.json/Matches.json";
import { useState } from "react";
import Standings from "./Standing";
import vec from "@assets/Vector.svg"
import mancity from "@assets/Clubs/ManchesterCity.svg"
import Chart from "@assets/Chart.svg"
function Overview() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (label: number) => {
    setSelectedTab(label);
  };

  return (
    <div className="w-full gap-6 grid grid-cols-[19fr_6fr]">
      <div className="gap-6 flex flex-col">
        <div className="rounded-[12px] gap-6 grid grid-cols-[1fr_1fr] h-50">
          <div className="bg-white p-5 rounded-[12px]">
            <h2 className="text-[#23262E]  font-bold text-[14px]">Facts</h2>
            <div className="gap-4 flex flex-col">
              <div className="grid w-full grid-cols-[1fr_1fr_1fr] gap-4">
                <div className="flex flex-col justify-between items-center py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                  <h3 className="text-[12px] text-[#23262EB2]">
                    Division level
                  </h3>
                  <p className="text-[12px] font-bold text-[#23262E]">1</p>
                </div>
                <div className="flex flex-col justify-between items-center py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                  <h3 className="text-[12px] text-[#23262EB2]">Rounds</h3>
                  <p className="text-[12px] font-bold text-[#23262E]">38</p>
                </div>
                <div className="flex flex-col justify-between items-center py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                  <h3 className="text-[12px] text-[#23262EB2]">Yellow cards</h3>
                  <p className="text-[12px] font-bold text-[#23262E]">2</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-full py-[15px] px-4 rounded-[8px] border-1 border-solid border-[#23262E1A]">
                <h3 className="text-[12px] text-[#23262EB2]">Red cards</h3>
                <p className="text-[12px] font-bold text-[#23262E]">2</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px] py-5 ">
          <h2 className="text-[#23262E] px-5  font-bold text-[14px]">Title Holder</h2>
          <div className="grid h-full grid-rows-[1fr_1fr]">
            <div className="flex px-5 cursor-pointer items-center border-b-1 border-solid border-[#23262E1A] justify-between">
              <div className="flex w-full gap-2">
                <img src={mancity} alt="manChity" />
                <div>
                  <h3 className="text-[12px] text-[#23262E]">Manchester City</h3>
                  <p className="text-[#23262EB2] text-[12px]">Title Holder (10)</p>
                </div>

              </div>
              <img className="-rotate-90" src={vec} alt="" />
            </div>
            <div className="flex px-5 cursor-pointer  items-center justify-between">
              <div className="flex w-full gap-2">
                <img src={mancity} alt="manChity" />
                <div>
                  <h3 className="text-[12px] text-[#23262E]">Manchester City</h3>
                  <p className="text-[#23262EB2] text-[12px]">Title Holder (10)</p>
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
          <h2 className="text-[#23262E] mb-3 font-bold text-[14px]">
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
          <p className="flex text-[12px] font-semibold  py-2 text-[#23262EB2]   ">
            2024/2025
          </p>
        </div>
        <div className="bg-white rounded-[12px] flex flex-col gap-y-6 px-5 w-full pt-4">
          <h2 className="text-[#23262E] -mb-2 font-bold text-[14px]">
            Tournament status
          </h2>
          <div className="flex flex-wrap gap-2 max-w-[1000px]">
            {Array.from({ length: 38 }, (_, index) => index + 1).map((item) => (
              <button
                key={item}
                className={`mobile-menu-p-sizedown min-w-[50px] py-[12px]  text-[12px] rounded-[8px] cursor-pointer font-semibold 
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
            ))}
          </div>
          <MatchList IsHomePage={false} List={Matches} />
        </div>

        <Standings />
      </div>
      <div className="rounded-[12px] gap-5 flex flex-col">

        <div className="bg-white h-50 rounded-[12px]">
          <h3 className="text-[12px] font-bold flex text-[#23262EB2]">
            <img src={Chart} alt="" />
            Prem Stats
          </h3>
        </div>
        <div className="bg-white h-50 rounded-[12px]"></div>
        <div className="bg-white h-50 rounded-[12px]"></div>
      </div>
    </div>
  );
}

export default Overview;
