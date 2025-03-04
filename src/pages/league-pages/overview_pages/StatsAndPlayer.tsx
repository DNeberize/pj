import Chart from "@assets/Chart.svg";
import Shirt from "@assets/Shirt.svg";
import Halad from "@assets/Halad.svg";
import Leicester from "@assets/Leicester City.svg";

interface StatsAndPlayerProps {
  noPrem?: boolean;
}

const StatsAndPlayer = ({ noPrem = true }: StatsAndPlayerProps) => {
  return (
    <>
      <div
        className={`bg-[var(--color-bg)] px-5 py-4 flex-col rounded-[12px] ${
          noPrem ? "flex" : "hidden"
        }`}
      >
        <h3 className="text-sm pb-2 font-bold flex text-[var(--color-text)]">
          <img src={Chart} alt="" />
          Prem Stats
        </h3>
        <div className="flex justify-between border-b-1 py-3 border-solid border-[var(--color-secondary)]">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs [var(--color-text-light)]">Player</p>
          </div>
          <p className="text-xs font-bold">637</p>
        </div>
        <div className="flex justify-between border-b-1 py-3 border-solid border-[var(--color-secondary)]">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs [var(--color-text-light)]">Foreign Player</p>
          </div>
          <p className="text-xs font-bold">402</p>
        </div>
        <div className="flex justify-between border-b-1 py-3 border-solid border-[var(--color-secondary)]">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs [var(--color-text-light)]">Number of teams</p>
          </div>
          <p className="text-xs font-bold">20</p>
        </div>
        <div className="flex justify-between pt-3">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs [var(--color-text-light)]">
              Total market value
            </p>
          </div>
          <p className="text-xs text-[#7F3FFC] font-bold">€ 11.7857B</p>
        </div>
      </div>
      <div className="bg-[var(--color-bg)] flex py-4 flex-col rounded-[12px]">
        <div className="pb-5 border-b-1 border-solid border-[var(--color-secondary)]">
          <h3 className="text-sm pb-1 px-5 font-bold flex text-[var(--color-text)]">
            Most valuable player
          </h3>
          <div className="flex px-5 items-center justify-between pt-3">
            <div className="flex gap-2 items-center">
              <img src={Halad} alt="Shirt" />
              <div>
                <p className="text-sm font-bold text-[var(--color-text)]">
                  Erling Braut Haland
                </p>
                <p className="text-xs text-[23262EB2]">Manchester City</p>
              </div>
            </div>
            <p className="text-xs text-[#7F3FFC] font-bold">€ 180M</p>
          </div>
        </div>
        <div className="px-5 flex flex-col gap-2 pt-2">
          <h3 className="text-xs font-bold flex text-[var(--color-text)]">
            Most valuable player
          </h3>
          <div className="flex items-center gap-2">
            <img src={Leicester} alt="Leicester" />
            <p className="text-[var(--color-text)] text-xs">Leicester City</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Leicester} alt="Leicester" />
            <p className="text-[var(--color-text)] text-xs">Leicester City</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Leicester} alt="Leicester" />
            <p className="text-[var(--color-text)] text-xs">Leicester City</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsAndPlayer;
