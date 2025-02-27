import vec from "@assets/Vector.svg";
import mancity from "@assets/Clubs/ManchesterCity.svg";
interface FactsAndTitlesProps {
  TitleHolderOnly: boolean;
}

const FactsAndTitles = ({ TitleHolderOnly = false }: FactsAndTitlesProps) => {
  return (
    <div
      className={`  rounded-[12px] gap-6 grid grid-cols-${
        TitleHolderOnly === true ? "[1fr]" : "[1fr_1fr]"
      } max-sm:grid-cols-[1fr]`}
    >
      <div
        className={` ${
          TitleHolderOnly && "hidden"
        }  bg-white p-5 rounded-[12px]`}
      >
        <h2 className="text-[#23262E] font-bold text-sm">Facts</h2>
        <div className="gap-4 flex flex-col">
          <div className="grid w-full grid-cols-[1fr_1fr_1fr] gap-4">
            <div className="flex flex-col justify-center items-center py-[15px] px-2 rounded-[8px] border border-solid border-[#23262E1A]">
              <h3 className="text-xs text-[#23262EB2] whitespace-nowrap overflow-hidden text-ellipsis">
                Division level
              </h3>
              <p className="text-xs font-bold text-[#23262E]">1</p>
            </div>
            <div className="flex flex-col justify-center items-center py-[15px] px-2 rounded-[8px] border border-solid border-[#23262E1A]">
              <h3 className="text-xs text-[#23262EB2] whitespace-nowrap overflow-hidden text-ellipsis">
                Rounds
              </h3>
              <p className="text-xs font-bold text-[#23262E]">38</p>
            </div>
            <div className="flex flex-col justify-center items-center py-[15px] px-2 rounded-[8px] border border-solid border-[#23262E1A]">
              <h3 className="text-xs text-[#23262EB2] whitespace-nowrap overflow-hidden text-ellipsis">
                Yellow cards
              </h3>
              <p className="text-xs font-bold text-[#23262E]">2</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center w-full py-[15px] px-2 rounded-[8px] border border-solid border-[#23262E1A]">
            <h3 className="text-xs text-[#23262EB2] whitespace-nowrap overflow-hidden text-ellipsis">
              Red cards
            </h3>
            <p className="text-xs font-bold text-[#23262E]">2</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[12px] py-5">
        <h2 className="text-[#23262E] px-5 font-bold text-sm">Title Holder</h2>
        <div className="grid h-full grid-rows-[1fr_1fr]">
          <div className="flex px-5 cursor-pointer items-center border-b border-solid border-[#23262E1A] justify-between">
            <div className="flex w-full gap-2">
              <img src={mancity} alt="Manchester City" />
              <div>
                <h3 className="text-xs text-[#23262E]">Manchester City</h3>
                <p className="text-[#23262EB2] text-xs">Title Holder (10)</p>
              </div>
            </div>
            <img className="-rotate-90" src={vec} alt="vector" />
          </div>
          <div className="flex px-5 cursor-pointer items-center justify-between">
            <div className="flex w-full gap-2">
              <img src={mancity} alt="Manchester City" />
              <div>
                <h3 className="text-xs text-[#23262E]">Manchester City</h3>
                <p className="text-[#23262EB2] text-xs">Title Holder (10)</p>
              </div>
            </div>
            <img className="-rotate-90" src={vec} alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsAndTitles;
