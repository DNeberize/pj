import manCity from "@assets/Clubs/ManchesterCity.svg";
export default function TeamStats() {
  return (
    <div className="w-full flex flex-col gap-3 rounded-[8px] bg-[var(--color-bg)] py-5">
      <h3 className="text-sm px-5 font-bold text-[var(--color-text)]">
        LEAGUE
      </h3>
      <div className="px-5">
        <div className="grid grid-cols-[minmax(100px,_1fr)_repeat(6,_minmax(0,_80px))] gap-2 py-2 border-b border-solid border-[var(--color-secondary)]">
          <h2 className="text-xs text-[var(--color-text-light)]">LEAGUE</h2>
          <h2 className="text-xs text-center text-[var(--color-text-light)] truncate">
            APPS
          </h2>
          <h2 className="text-xs text-center text-[var(--color-text-light)] truncate">
            GOALS
          </h2>
          <h2 className="text-xs text-center text-[var(--color-text-light)] truncate">
            SHOTS PG
          </h2>
          <h2 className="text-xs text-center text-[var(--color-text-light)] truncate">
            DISCIPLINE
          </h2>
          <h2 className="text-xs text-center text-[var(--color-text-light)] truncate">
            POSSESSION%
          </h2>
          <h2 className="text-xs text-center text-[var(--color-text-light)] truncate">
            PASS%
          </h2>
        </div>
        <div className="grid items-center  grid-cols-[minmax(100px,_1fr)_repeat(6,_minmax(0,_80px))] h-15 gap-2 py-2 border-b border-solid border-[var(--color-secondary)]">
          <h2 className="text-xs items-center flex gap-2  text-[var(--color-text)]">
            <img src={manCity} alt="" />
            English Premier League
          </h2>
          <h2 className="text-xs text-center items-center  text-[var(--color-text-light)] truncate">
            11
          </h2>
          <h2 className="text-xs text-center items-center  text-[var(--color-text-light)] truncate">
            11
          </h2>
          <h2 className="text-xs text-center items-center  text-[var(--color-text-light)] truncate">
            16
          </h2>
          <h2 className="text-xs text-center items-center  text-[var(--color-text-light)] truncate">
            <div className="flex  h-6  w-full justify-center gap-1">
              <div className="w-5   items-center justify-center  flex  rounded-[5px] bg-[#FFC21A]">
                1
              </div>
              <div className="w-5  items-center justify-center flex   rounded-[5px] bg-[#F21818]">
                2
              </div>
            </div>
          </h2>
          <h2 className="text-xs text-center items-center  text-[var(--color-text-light)] truncate">
            62.65
          </h2>
          <h2 className="text-xs text-center items-center  text-[var(--color-text-light)] truncate">
            80.2
          </h2>
        </div>
      </div>
    </div>
  );
}
