import dayjs from "dayjs";

type MobileFeedMenuProps = {
  selectedTab: number;
  handleTabChange: (value: number) => void;
  MenuItems: { label: string; id: number }[];
  isLeaguePage: boolean;
};

function MobileFeedMenu({
  selectedTab,
  handleTabChange,
  MenuItems,
  isLeaguePage,
}: MobileFeedMenuProps) {
  const formattedDate = dayjs().format("MM.DD ddd").toUpperCase();

  const getButtonStyles = (item: number) => {
    let styles =
      "rounded-[0.5rem] py-[0.75rem]  text-xs font-semibold cursor-pointer flex items-center justify-center transition-colors duration-500 ease-in-out overflow-hidden whitespace-nowrap text-ellipsis";

    if (selectedTab === item) {
      if (isLeaguePage) {
        styles += " bg-[#7F3FFC] text-black";
      } else {
        if (item === 1) {
          styles += " bg-red-500 text-white";
        } else {
          styles += " bg-[#7F3FFC] text-white";
        }
      }
    } else {
      if (isLeaguePage) {
        styles +=
          " bg-[var(--color-bg)] border-[1px] border-solid border-[var(--color-text)]/10 text-[var(--color-text)]/70";
      } else {
        styles += " text-[var(--color-text)]/70 border-transparent";
      }
    }

    return styles;
  };

  return (
    <div
      className={`gap-y-2 lg:hidden w-full flex flex-col ${
        isLeaguePage ? "px-5" : ""
      }`}
    >
      <div
        className={`w-full justify-between rounded-[0.5rem] max-lg:flex ${
          isLeaguePage ? "gap-[0.25rem]" : ""
        }`}
      >
        {MenuItems.map((item, index) => (
          <button
            key={item.id}
            className={`w-full max-w-[22.25rem] ${getButtonStyles(item.id)}`}
            onClick={() => handleTabChange(item.id)}
            style={{ minWidth: 0 }}
          >
            {index === 0 && !isLeaguePage ? item.label.slice(0, 3) : item.label}
          </button>
        ))}
      </div>

      {!isLeaguePage && (
        <div className="grid grid-cols-[10fr_1fr] gap-[0.25rem]">
          <div className="h-[2.25rem] rounded-[0.5rem] min-w-[8.125rem] bg-[var(--color-primary)] flex justify-between p-[0.75rem] items-center">
            <img
              className="rotate-90 size-[0.625rem]"
              src="/src/assets/Vector.svg"
              alt="Arrow"
            />
            <div className="flex gap-[0.25rem] items-center">
              <img src="/src/assets/calendar.svg" alt="Calendar" />
              <p className="text-[0.6875rem] text-[var(--color-text)] font-semibold">
                {formattedDate}
              </p>
            </div>
            <img
              className="-rotate-90 size-[0.6875rem]"
              src="/src/assets/Vector.svg"
              alt="Arrow"
            />
          </div>
          <button className="cursor-pointer hover:opacity-80 bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[0.5rem] border-[1px] border-solid w-[2.25rem]">
            <img src="/src/assets/history.svg" alt="History" />
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileFeedMenu;
