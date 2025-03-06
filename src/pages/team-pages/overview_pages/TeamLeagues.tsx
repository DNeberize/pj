import PLeague from "@assets/Premier League.svg";
export default function TeamLeagues() {
  return (
    <>
      <div className="w-full rounded-[8px] pt-5 pb-3 px-5 bg-[var(--color-bg)] ">
        <h2 className="text-[var(--color-text)] py-3 not-only:font-bold text-sm">
          Leagues
        </h2>
        <div className="grid grid-cols-4 w-full gap-5 ">
          {[
            "English Premier League",
            "English Premier League",
            "English Premier League",
            "English Premier League",
            "English Premier League",
            "English Premier League",
          ].map((item, index) => (
            <div
              key={index}
              className="grid-1 border-1 border-solid border-[#23262E1A] aspect-[21/13] rounded-[12px] py-5 flex justify-center flex-col items-center"
            >
              <img className="h-full" src={PLeague} alt="" />
              <h3 className="text-xs font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
