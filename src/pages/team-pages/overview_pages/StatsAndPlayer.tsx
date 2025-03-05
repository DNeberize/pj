import Chart from "@assets/Chart.svg";
import Shirt from "@assets/Shirt.svg";

const StatsAndPlayer = () => {
  return (
    <>
      <div
        className={`bg-[var(--color-bg)] px-5 py-4 flex-col rounded-[12px]  `}
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
    </>
  );
};

export default StatsAndPlayer;
