import { useState } from "react";

function FeedMenu() {
  const [activeTab, setActiveTab] = useState<string>("All Matches");

  const handleTabClick = (tab: string) => {
    setActiveTab(() => tab);
  };

  return (
    <>
      <div className="grid  grid-cols-[11fr_3fr] gap-4 p-[20px] mb-4">
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
        <div className="gap-y-2 flex flex-col">
          <div className=" hidden w-100  h-[40px] rounded-[12px] p-1 text-[12px] max-lg:flex">
            {["All", "Timeline", "Yesterday", "Live (12)"].map((tab) => (
              <button
                key={tab}
                className={`rounded-[8px] cursor-pointer font-semibold px-[1rem] flex items-center justify-center shrink-0 transition-colors duration-500 ease-in-out ${
                  activeTab === tab
                    ? "bg-[#7F3FFC] text-[#23262E]"
                    : "text-[#23262E]/70"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab === "Live (12)" && (
                  <img src="src/assets/Live.svg" alt="" className=" inline" />
                )}
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-[10fr_1fr] gap-4">
            <div className="h-[36px]  rounded-[8px] min-w-[130px] bg-[#F7F8FA] flex justify-between p-[12px] items-center ">
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
            <button className="cursor-pointer hover:opacity-80  bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid w-[36px]">
              <img src="src\assets\history.svg" alt="" />
            </button>
          </div>
        </div>

        <div />
      </div>
    </>
  );
}

export default FeedMenu;
