import { Flex, Progress } from "antd";
import "../index.css";
import MatchList from "../Feed/MatchListing";
import Matches from "../jsonfiles.json/Matches.json";
import { useState } from "react";
import { Standings } from "./Standing";
function Overview() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (label: number) => {
    setSelectedTab(label);
  };

  return (
    <div className="w-full gap-6 grid grid-cols-[19fr_6fr]">
      <div className="gap-6 flex flex-col">
        <div className="rounded-[12px] gap-6 grid grid-cols-[1fr_1fr] h-50">
          <div className="bg-white rounded-[12px] h-50"></div>
          <div className="bg-white rounded-[12px] h-50"></div>
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
      <div className="bg-white rounded-[12px] h-50"></div>
    </div>
  );
}

export default Overview;
