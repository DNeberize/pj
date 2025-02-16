import ListOfLists from "./ListOfLists";

function Footer() {
  return (
    <div className=" right-0 absolute left-0 flex justify-center bg-white mt-20 h-[580px]">
      <div className="flex flex-col w-[1000px] relative h-full">
        <div className="flex flex-col gap-y-[80px] pt-[40px]  w-full flex-grow">
          <div className="h-[125px] grid grid-cols-[233px_1fr]  w-full">
            <div>
              <h2 className="text-[#23262E] mb-1 font-semibold text-[14px] uppercase">
                Football
              </h2>
              <ul className="list-none flex flex-col gap-y-[10px]">
                <li className="text-[12px] text-[#23262E]">Transfer News</li>
                <li className="text-[12px] text-[#23262E]">Live</li>
                <li className="text-[12px] text-[#23262E]">Premier League</li>
                <li className="text-[12px] text-[#23262E]">Seria A</li>
              </ul>
            </div>

            <div className="h-full flex items-center ">
              <p className=" text-[12px] text-[#23262E]">
                Football live scores page on Flashscore.com offers all the
                latest football results from EPL 2024 and more than 100+
                football leagues and tournaments all around the world including
                the most famous: LaLiga, Serie A, Bundesliga, UEFA Champions
                League and also other leagues such as MLS or Saudi Pro League.
                Follow all the latest football results on Flashscore.com where
                you can find previews of football matches, detailed statistics
                (shots on goal, ball possession, expected goals (xG), corner
                stats, yellow and red cards, fouls etc.)
              </p>
            </div>
          </div>

          <ListOfLists />
        </div>

        <div className="h-[60px] w-full flex justify-between items-center border-t-2 border-solid border-[#23262E]/[10%]">
          <div className="gap-[8px] flex h-[18px] w-[360px]">
            <img
              className="border-r-2 border-solid pr-1 border-[#23262E]/[10%]"
              src="src/assets/TheSportsLogo.svg"
              alt=""
            />
            <h3 className="text-[#23262E]/[70%] text-[12px] flex">
              OptimoScore’s Sports Data Provider
            </h3>
          </div>

          <div className="flex gap-[8px]">
            <h3 className="text-[#23262E]/[70%] border-r-2 border-solid pr-1 border-[#23262E]/[10%] text-[12px] flex">
              Copyright @ 2024 OptimoScore
            </h3>
            <h3 className="text-[#23262E]/[70%] text-[12px] flex">
              18+ Gamble Responsibly
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
