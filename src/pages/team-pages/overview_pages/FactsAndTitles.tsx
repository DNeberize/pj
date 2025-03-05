import vec from "@assets/Vector.svg";
import mancity from "@assets/Clubs/ManchesterCity.svg";
interface FactsAndTitlesProps {
  TitleHolderOnly: boolean;
  onSide: boolean;
}

const FactsAndTitles = ({
  TitleHolderOnly = false,
  onSide = false,
}: FactsAndTitlesProps) => {
  return (
    <div
      className={`  rounded-[12px] gap-6 grid ${
        TitleHolderOnly || onSide ? "grid-cols-[1fr]" : "grid-cols-[1fr_1fr]"
      } 
      
      max-sm:grid-cols-[1fr]`}
    >
      <div
        className={` ${
          TitleHolderOnly && "hidden"
        }  bg-[var(--color-bg)] p-5 pt-4 rounded-[12px]`}
      >
        <h2 className="text-[var(--color-text)] pb-2 font-bold text-sm">
          Facts
        </h2>
        <div className="gap-4 flex flex-col">
          <div
            className={`grid w-full  ${
              onSide ? "grid-cols-[1fr_1fr]" : "grid-cols-[1fr_1fr_1fr]"
            }  max-lg:grid-cols-[1fr_1fr] gap-4`}
          >
            <div className="flex flex-col justify-center items-center py-[15px] px-2 rounded-[8px] border border-solid border-[var(--color-secondary)]">
              <h3 className="text-xs [var(--color-text-light)] whitespace-nowrap overflow-hidden text-ellipsis">
                Division level
              </h3>
              <p className="text-xs font-bold text-[var(--color-text)]">1</p>
            </div>
            <div className="flex flex-col justify-center items-center py-[15px] px-2 rounded-[8px] border border-solid border-[var(--color-secondary)]">
              <h3 className="text-xs [var(--color-text-light)] whitespace-nowrap overflow-hidden text-ellipsis">
                Rounds
              </h3>
              <p className="text-xs font-bold text-[var(--color-text)]">38</p>
            </div>
            <div className="flex flex-col justify-center items-center py-[15px] px-2 rounded-[8px] border border-solid border-[var(--color-secondary)]">
              <h3 className="text-xs [var(--color-text-light)] whitespace-nowrap overflow-hidden text-ellipsis">
                Yellow cards
              </h3>
              <p className="text-xs font-bold text-[var(--color-text)]">2</p>
            </div>
            <div
              className={`flex flex-col justify-between items-center ${
                onSide ? "" : "lg:col-start-1 lg:row-start-2 lg:col-span-3"
              }  py-[15px] px-2 rounded-[8px] border border-solid border-[var(--color-secondary)]`}
            >
              <h3 className="text-xs [var(--color-text-light)] whitespace-nowrap overflow-hidden text-ellipsis">
                Red cards
              </h3>
              <p className="text-xs font-bold text-[var(--color-text)]">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-bg)] rounded-[12px]  pb-8 py-5">
        <h2 className="text-[var(--color-text)] px-5 font-bold text-sm">
          Title Holder
        </h2>
        <div className="grid h-full grid-rows-[1fr_1fr]">
          <div className="flex px-5 cursor-pointer items-center border-b border-solid border-[var(--color-secondary)] justify-between">
            <div className="flex w-full gap-2">
              <img src={mancity} alt="Manchester City" />
              <div>
                <h3 className="text-xs text-[var(--color-text)]">
                  Manchester City
                </h3>
                <p className="[var(--color-text-light)] text-xs">
                  Title Holder (10)
                </p>
              </div>
            </div>
            <img className="-rotate-90" src={vec} alt="vector" />
          </div>
          <div className="flex px-5 cursor-pointer items-center justify-between">
            <div className="flex w-full gap-2">
              <img src={mancity} alt="Manchester City" />
              <div>
                <h3 className="text-xs text-[var(--color-text)]">
                  Manchester City
                </h3>
                <p className="[var(--color-text-light)] text-xs">
                  Title Holder (10)
                </p>
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
