import city from "@assets/Clubs/ManchesterCity.svg";
import StatsAndPlayer from "./overview_pages/StatsAndPlayer";
import FactsAndTitles from "./overview_pages/FactsAndTitles";

export default function Champions() {
  return (
    <div className="grid w-full gap-6 grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      <div className="rounded-[12px] pt-5 gap-5 flex-col bg-[var(--color-bg)]">
        <h2 className="px-5 pt-2 text-sm font-bold">Champions By year</h2>
        <div className=" gap-4 p-5  flex flex-wrap">
          {Array.from({ length: 16 }, (_, index) => (
            <div
              className="flex aspect-[4/3] flex-col py-6 px-3 min-w-47 border-1 gap-2 justify-center items-center border-solid border-[#23262E1A] rounded-[12px]"
              key={index}
            >
              <h2 className="text-xs font-bold py-1.5 px-2.5 rounded-[8px] bg-[#23262E4D] text-white">
                2021-2022
              </h2>
              <img className="h-15" src={city} alt="" />
              <h2 className="text-xs font-semibold">Manchester City</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[12px] flex flex-col  gap-6  ">
        <StatsAndPlayer noPrem={false} />
        <FactsAndTitles onSide={true} TitleHolderOnly={false} />
      </div>
    </div>
  );
}
