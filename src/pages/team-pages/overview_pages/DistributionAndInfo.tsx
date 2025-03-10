import { useState } from "react";
import FactsAndTitles from "./FactsAndTitles";

export default function DistributionAndInfo() {
    const [selectedStat, setSelectedStat] = useState("All");
  
  const handleTabChangeStat = (item: string) => {
    setSelectedStat(item);
  };
  const GetGreenColor = (index:number) => {
    if (index === 0) return "text-[#3ECC29] font-bold"; 
    if (index === 1 || index === 2) return "bg-[#3ECC29]";
    return "bg-[#23262E33]"; 
  };
  
  const GetRedColor = (index:number) => {
    if (index === 0) return "text-[#F21818] font-bold"; 
    if (index === 2 || index === 3) return "bg-[#F21818]";
    return "bg-[#23262E33]"; 
  };


  return (
    <div className="w-full grid grid-cols-[1fr_1fr] gap-5">
      <div className="grid-1 rounded-[12px] px-5 gap-3 flex flex-col w-full bg-[var(--color-bg)]">
        <div className="flex justify-between items-center py-3 ">
        <h3 className="text-sm font-bold flex text-[var(--color-text)]">
        Goal Distribution
        </h3>
        <div className="bg-[var(--color-primary)] p-1 rounded-[12px] flex  sm:w-auto">
          {["All", "Home","Away"].map((item, index) => (
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
   
        <div className="grid-rows-3 flex-col flex gap-2">
          <div className="grid-1 items-center flex justify-between">
            <p className="text-xs">Scored</p>
            <div className="flex gap-2">
              {[7, 2, 1, 0, 1, 6, 1].map((item, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 ${GetGreenColor(index)}  rounded-full flex items-center justify-center`}
                >
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid-1 flex items-center justify-between">
            <p className="text-xs">Scored</p>
            <div className="flex gap-2">
              {[5, 2, 0, 2, 0, 6, 0].map((item, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 ${GetRedColor(index)}  rounded-full flex items-center justify-center`}
                >
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid-1 flex items-center justify-end">
            <div className="flex gap-1">
              {["00'", "10'", "20'", "30'", "40'", "50'", "90'"].map((item, index) => (
                <div
                  key={index}
                  className="w-6 h-6  rounded-full flex items-center justify-center"
                >
                  <p className="text-[10px] text-[var(--color-text-light)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-light)]">*English Premier League Goal distribution from 4 Matches</p>
      </div>
      <FactsAndTitles onSide={true} TitleHolderOnly={true} />
    </div>
  );
}
