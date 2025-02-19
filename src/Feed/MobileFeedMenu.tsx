import React from "react";

type MobileFeedMenuProps = {
  selectedTab: string;
  handleTabChange: (value: string) => void;
  MenuItems: { label: string; id: string }[];
};

const MobileFeedMenu: React.FC<MobileFeedMenuProps> = ({
  selectedTab,
  handleTabChange,
  MenuItems,
}) => {
  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(currentDate.getDate()).padStart(2, "0")} ${currentDate
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase()}`;

  return (
    <div className="gap-y-2 lg:hidden w-full flex flex-col">
      <div className="hidden w-full justify-between rounded-[12px] max-lg:flex">
        {MenuItems.map((e) => (
          <button
            key={e.id}
            className={`rounded-[8px] py-[12px] mobile-menu-p-sizedown text-[#23262E] text-[12px] cursor-pointer font-semibold px-[1rem] flex items-center justify-center shrink-0 transition-colors duration-500 ease-in-out ${
              selectedTab.slice(0, 3) === e.label.slice(0, 3)
                ? "bg-[#7F3FFC] text-[#23262E]"
                : "text-[#23262E]/70"
            }`}
            onClick={() => handleTabChange(e.label)}
          >
            {e.label}
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
              {formattedDate}
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
};

export default MobileFeedMenu;
