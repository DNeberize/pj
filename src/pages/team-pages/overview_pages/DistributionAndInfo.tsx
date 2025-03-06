import FactsAndTitles from "./FactsAndTitles";

export default function DistributionAndInfo() {
  return (
    <div className="w-full grid grid-cols-[1fr_1fr] gap-5">
      <div className="grid-1 rounded-[12px] p-5 w-full bg-[var(--color-bg)]">
        <div className="grid-rows-3 flex-col flex gap-2">
          <div className="grid-1 items-center flex justify-between">
            <p className="text-xs">Scored</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <div
                  key={index}
                  className="w-6 h-6 bg-[#23262E33] rounded-full flex items-center justify-center"
                >
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid-1 flex items-center justify-between">
            <p className="text-xs">Scored</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <div
                  key={index}
                  className="w-6 h-6 bg-[#23262E33] rounded-full flex items-center justify-center"
                >
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid-1 flex items-center justify-between">
            <p className="text-xs">Scored</p>
            <div className="flex gap-2">
              {["00", "10", "20", "30", "40", "50", "90"].map((item, index) => (
                <div
                  key={index}
                  className="w-6 h-6  rounded-full flex items-center justify-center"
                >
                  <p className="text-xs text-[var(--color-text-light)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <FactsAndTitles onSide={true} TitleHolderOnly={true} />
    </div>
  );
}
