import { useState } from "react";
import MobileFeedMenu from "./MobileFeedMenu";

function FeedMenu() {
  const [activeTab, setActiveTab] = useState<string>("All Matches");

  const handleTabClick = (tab: string) => {
    setActiveTab(() => tab);
  };

  return (
    <>
      <div className="grid  grid-cols-[11fr_3fr] max-lg:flex gap-4 p-[20px] mb-4">
        <div className="max-lg:hidden">
          <div className="bg-[#F7F8FA] h-[45px] rounded-[12px] p-1 text-[12px] grid grid-cols-[1fr_1fr_1fr_1fr]">
            {["All Matches", "Live (12)", "Finished", "Scheduled"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`rounded-[8px] cursor-pointer font-semibold px-[20px] flex items-center justify-center shrink-0 transition-colors duration-500 ease-in-out ${
                    activeTab === tab
                      ? "bg-white text-[#23262E]"
                      : "text-[#23262E]/70"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab === "Live (12)" && (
                    <img src="src/assets/Live.svg" alt="" className=" inline" />
                  )}
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
        <div className="h-[45px] max-lg:hidden  rounded-[8px] min-w-[130px] bg-[#F7F8FA] flex justify-between p-[12px] items-center ">
          <img
            className="rotate-90 size-[10px]"
            src="src/assets/Vector.svg"
            alt=""
          />
          <img src="src/assets/calendar.svg" alt="" />
          <p className="text-[11px] text-[#23262E] font-semibold">01.08 THU</p>
          <img
            className="-rotate-90 size-[11px]"
            src="src/assets/Vector.svg"
            alt=""
          />
        </div>
        <MobileFeedMenu />
      </div>
    </>
  );
}

export default FeedMenu;
