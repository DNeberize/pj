import ListOfLists from "../components/ListOfLists";
import { useState } from "react";

function Footer() {
  const [openSections, setOpenSections] = useState(true);

  const toggleSection = () => {
    setOpenSections((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-center max-lg:px-4 bottom-0 bg-[var(--color-bg)] mt-20 max-lg:h-auto">
      <div className="flex flex-col w-full max-w-[1000px] relative h-full">
        <div className="flex flex-col gap-y-[80px] max-lg:gap-y-8 pt-[40px] w-full flex-grow">
          <div className="grid grid-cols-12 max-lg:flex-col-reverse max-lg:flex max-lg:gap-10 w-full">
            <div className="col-span-4 max-lg:border-b border-solid border-[var(--color-secondary)]">
              <h2
                className="text-[var(--color-text)] mb-1 flex justify-between font-semibold text-sm uppercase cursor-pointer"
                onClick={toggleSection}
              >
                Football
                <img
                  className={`lg:hidden transform transition-transform ${
                    openSections ? "rotate-180" : ""
                  }`}
                  src="/src/assets/VectorV2.svg"
                  alt=""
                />
              </h2>

              <div
                className={`transition-all overflow-hidden duration-300 ease-in-out ${
                  openSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-none flex flex-col gap-y-[10px]">
                  <li className="text-xs text-[var(--color-text)]">
                    Transfer News
                  </li>
                  <li className="text-xs text-[var(--color-text)]">Live</li>
                  <li className="text-xs text-[var(--color-text)]">
                    Premier League
                  </li>
                  <li className="text-xs text-[var(--color-text)]">Seria A</li>
                </ul>
              </div>
            </div>

            <div className="h-full col-span-8 flex items-center">
              <p className="text-xs text-[var(--color-text)]">
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

        <div className="lg:h-[4rem] max-lg:gap-[1rem] w-full max-lg:flex-col flex justify-between max-lg:items-start items-center border-t-2 max-lg:py-[12px] border-solid border-[var(--color-text)]/[10%]">
          <div className="gap-[1rem] max-lg:gap-[1rem] max-lg:flex-col flex">
            <img
              className="border-r-2 max-lg:border-r-0 max-lg:max-h-[20px] border-solid pr-1 max-lg:w-[150px] border-[var(--color-text)]/[10%]"
              src="/src/assets/TheSportsLogo.svg"
              alt=""
            />
            <h3 className="text-[var(--color-text)]/[70%] text-xs flex">
              OptimoScore’s Sports Data Provider
            </h3>
          </div>

          <div className="flex max-lg:flex-col max-lg:gap-[1rem] gap-[8px]">
            <h3 className="text-[var(--color-text)]/[70%] border-r-2 border-solid pr-1 border-[var(--color-text)]/[10%] text-xs flex">
              Copyright @ 2024 OptimoScore
            </h3>
            <h3 className="text-[var(--color-text)]/[70%] text-xs flex">
              18+ Gamble Responsibly
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
