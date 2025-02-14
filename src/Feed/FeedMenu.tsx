import { ReactNode, useState } from "react";

type FeedProps = {
  children: ReactNode;
};

function FeedMenu({ children }: FeedProps) {
  const [activeTab, setActiveTab] = useState<string | null>("All Matches");

  const handleTabClick = (tab: string) => {
    setActiveTab(() => tab);
  };

  return (
    <div className="bg-white rounded-[12px] text-[#23262E]/70 mt-[20px] ">
      <div className="flex justify-between p-[20px] mb-4">
        <div>
          <div className="bg-[#F7F8FA] h-[45px] rounded-[12px] p-1 text-[12px] inline-flex">
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
                    <img
                      src="src/assets/Live.svg"
                      alt=""
                      className="mr-2 inline"
                    />
                  )}
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
        <div className="h-[45px] w-[180px] rounded-[8px] bg-[#F7F8FA] flex justify-between p-[12px] items-center ">
          <img
            className="rotate-90 size-[11px]"
            src="src/assets/Vector.svg"
            alt=""
          />
          <img src="src/assets/calendar.svg" alt="" />
          <p className="text-[12px] text-[#23262E] font-semibold">01.08 THU</p>
          <img
            className="-rotate-90 size-[11px]"
            src="src/assets/Vector.svg"
            alt=""
          />
        </div>
      </div>
      {children}
    </div>
  );
}

export default FeedMenu;
