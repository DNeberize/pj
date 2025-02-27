import Chart from "@assets/Chart.svg";
import Shirt from "@assets/Shirt.svg";
import Halad from "@assets/Halad.svg";
import Leicester from "@assets/Leicester City.svg";

const StatsAndPlayer = () => {
  return (
    <>
      <div className="bg-white flex px-5 py-4 flex-col rounded-[12px]">
        <h3 className="text-sm pb-2 font-bold flex text-[#23262E]">
          <img src={Chart} alt="" />
          Prem Stats
        </h3>
        <div className="flex justify-between border-b-1 py-3 border-solid border-[#23262E1A]">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs text-[#23262EB2]">Player</p>
          </div>
          <p className="text-xs font-bold">637</p>
        </div>
        <div className="flex justify-between border-b-1 py-3 border-solid border-[#23262E1A]">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs text-[#23262EB2]">Foreign Player</p>
          </div>
          <p className="text-xs font-bold">402</p>
        </div>
        <div className="flex justify-between border-b-1 py-3 border-solid border-[#23262E1A]">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs text-[#23262EB2]">Number of teams</p>
          </div>
          <p className="text-xs font-bold">20</p>
        </div>
        <div className="flex justify-between pt-3">
          <div className="flex gap-2 items-center">
            <img src={Shirt} alt="Shirt" />
            <p className="text-xs text-[#23262EB2]">Total market value</p>
          </div>
          <p className="text-xs text-[#7F3FFC] font-bold">€ 11.7857B</p>
        </div>
      </div>
      <div className="bg-white flex py-4 flex-col rounded-[12px]">
        <div className="pb-5 border-b-1 border-solid border-[#23262E1A]">
          <h3 className="text-sm pb-1 px-5 font-bold flex text-[#23262E]">
            Most valuable player
          </h3>
          <div className="flex px-5 items-center justify-between pt-3">
            <div className="flex gap-2 items-center">
              <img src={Halad} alt="Shirt" />
              <div>
                <p className="text-sm font-bold text-[#23262E]">
                  Erling Braut Haland
                </p>
                <p className="text-xs text-[23262EB2]">Manchester City</p>
              </div>
            </div>
            <p className="text-xs text-[#7F3FFC] font-bold">€ 180M</p>
          </div>
        </div>
        <div className="px-5 flex flex-col gap-2 pt-2">
          <h3 className="text-xs font-bold flex text-[#23262E]">
            Most valuable player
          </h3>
          <div className="flex items-center gap-2">
            <img src={Leicester} alt="Leicester" />
            <p className="text-[#23262E] text-xs">Leicester City</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Leicester} alt="Leicester" />
            <p className="text-[#23262E] text-xs">Leicester City</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Leicester} alt="Leicester" />
            <p className="text-[#23262E] text-xs">Leicester City</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsAndPlayer;
