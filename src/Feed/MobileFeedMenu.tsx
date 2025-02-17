import { useState, useEffect } from "react";

function MobileFeedMenu() {
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    setActiveTab("All");
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="gap-y-2 lg:hidden w-full flex flex-col">
      <div className="hidden  w-full justify-evenly  rounded-[12px]   max-lg:flex">
        {["All", "Live (12)", "Finished", "Scheduled"].map((tab) => (
          <button
            key={tab}
            className={`rounded-[8px] py-[12px] mobile-menu-p-sizedown  text-[#23262E] text-[12px] cursor-pointer font-semibold px-[1rem] flex items-center justify-center shrink-0 transition-colors duration-500 ease-in-out ${
              activeTab === tab
                ? "bg-[#7F3FFC] text-[#23262E]"
                : "text-[#23262E]/70"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[10fr_1fr] gap-4">
        <div className="h-[36px] rounded-[8px] min-w-[130px] bg-[#F7F8FA] flex justify-between p-[12px] items-center">
          <img
            className="rotate-90 size-[10px]"
            src="src/assets/Vector.svg"
            alt=""
          />
          <div className="flex gap-4 items-center">
            <img src="src/assets/calendar.svg" alt="" />
            <p className="text-[11px] text-[#23262E] font-semibold">
              01.08 THU
            </p>
          </div>
          <img
            className="-rotate-90 size-[11px]"
            src="src/assets/Vector.svg"
            alt=""
          />
        </div>
        <button className="cursor-pointer hover:opacity-80 bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid w-[36px]">
          <img src="src/assets/history.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default MobileFeedMenu;
