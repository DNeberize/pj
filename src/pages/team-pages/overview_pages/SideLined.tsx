import aid from "@assets/First Aid Kit.svg";
import halad from "@assets/Halad.svg";
export default function SideLined() {
  return (
    <div className="w-full flex flex-col gap-3 rounded-[8px] bg-[var(--color-bg)] py-5">
      <h3 className="text-sm px-5 font-bold flex text-[var(--color-text)]">
        Goal Distribution
      </h3>
      <div>
        <ul className="flex  gap-6 px-5 py-2 border-b-1 border-solid border-[var(--color-secondary)] justify-between">
          <li className="text-xs text-[var(--color-text-light)] min-w-53  truncate overflow-hidden text-ellipsis whitespace-nowrap">
            PLAYER
          </li>
          <ul className="flex gap-6 justify-between w-full">
            <li className="text-xs w-full flex justify-center text-[var(--color-text-light)]">
              REASON
            </li>
            <li className="text-xs w-full flex justify-center text-[var(--color-text-light)]">
              POSITION
            </li>
            <li className="text-xs w-full flex justify-center text-[var(--color-text-light)]">
              SINCE
            </li>
          </ul>
        </ul>
        <div className="flex items-center h-15 gap-6 px-5 py-2 border-b-1 border-solid border-[var(--color-secondary)] justify-between">
          <div className="text-xs gap-2 text-[var(--color-text)] min-w-53 flex items-center  truncate overflow-hidden text-ellipsis whitespace-nowrap">
            <img className="h-8" src={halad} alt="" />
            <div>
              <h3 className="text-xs font-bold text-[var(--color-text)]">
                Player
              </h3>
              <p className="text-[var(--color-text-light)]">Age 12</p>
            </div>
          </div>
          <div className="flex gap-6 justify-between w-full">
            <div className="text-xs w-full gap-2 flex justify-center items-center text-[var(--color-text)]">
              <img src={aid} alt="" />
              <h3 className="text-xs font-semibold text-[var(--color-text)]">
                Fractured Leg
              </h3>
            </div>
            <div className="text-xs w-full items-center flex justify-center text-[var(--color-text)]">
              -
            </div>
            <div className="text-xs w-full items-center flex justify-center text-[var(--color-text)]">
              10 Jan 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
