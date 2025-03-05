import Halad from "@assets/Halad.svg";

interface TopPlayersProps {
  selectedStat: string;
  handleTabChangeStat: (item: string) => void;
}

const TopPlayers = ({ selectedStat, handleTabChangeStat }: TopPlayersProps) => {
  return (
    <div className="bg-[var(--color-bg)] flex pt-4 flex-col rounded-[12px]">
      <div className="flex items-center justify-between px-5">
        <h3 className="text-sm font-bold flex text-[var(--color-text)]">
          Top players
        </h3>
        <div className="bg-[var(--color-primary)] p-1 rounded-[12px] flex w-full sm:w-auto">
          {["Goal", "Assist"].map((item, index) => (
            <button
              key={index}
              className={`rounded-[8px] text-xs px-2 py-1 cursor-pointer font-semibold w-full sm:w-auto max-w-[440px] transition-colors duration-500 ease-in-out ${
                selectedStat === item
                  ? "bg-[var(--color-bg)] text-[var(--color-text)]"
                  : "[var(--color-text-light)]"
              }`}
              onClick={() => handleTabChangeStat(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center pb-3 border-b-1 border-solid border-[var(--color-secondary)]">
        <p className="[var(--color-text-light)] text-xs">#</p>
        <div>
          <p className="[var(--color-text-light)] text-xs">Players</p>
        </div>
        <p className="[var(--color-text-light)] text-xs">Matches</p>
        <p className="[var(--color-text-light)] text-xs">Goals</p>
      </div>
      <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center py-3 border-b-1 border-solid border-[var(--color-secondary)]">
        <p className="text-[var(--color-text)] text-xs">1</p>
        <div className="flex gap-2">
          <img className="max-w-[24px]" src={Halad} alt="halad" />
          <p className="text-[var(--color-text)] font-semibold text-xs">
            Erling Braut Håland
          </p>
        </div>
        <p className="text-[var(--color-text)] flex justify-center text-xs">
          4
        </p>
        <p className="text-[var(--color-text)] flex justify-center text-xs">
          1
        </p>
      </div>
      <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center py-3 border-b-1 border-solid border-[var(--color-secondary)]">
        <p className="text-[var(--color-text)] text-xs">1</p>
        <div className="flex gap-2">
          <img className="max-w-[24px]" src={Halad} alt="halad" />
          <p className="text-[var(--color-text)] font-semibold text-xs">
            Erling Braut Håland
          </p>
        </div>
        <p className="text-[var(--color-text)] flex justify-center text-xs">
          4
        </p>
        <p className="text-[var(--color-text)] flex justify-center text-xs">
          1
        </p>
      </div>
      <div className="grid gap-3 grid-cols-[1fr_8fr_4fr_4fr] p-5 items-center py-3 border-b-1 border-solid border-[var(--color-secondary)]">
        <p className="text-[var(--color-text)] text-xs">1</p>
        <div className="flex gap-2">
          <img className="max-w-[24px]" src={Halad} alt="halad" />
          <p className="text-[var(--color-text)] font-semibold text-xs">
            Erling Braut Håland
          </p>
        </div>
        <p className="text-[var(--color-text)] flex justify-center text-xs">
          4
        </p>
        <p className="text-[var(--color-text)] flex justify-center text-xs">
          1
        </p>
      </div>
      <button className="w-full h-[40px] text-xs bg-[#7F3FFC] text-white flex justify-center items-center rounded-b-[8px]">
        See-All
      </button>
    </div>
  );
};

export default TopPlayers;
