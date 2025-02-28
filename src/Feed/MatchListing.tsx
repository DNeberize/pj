type Match = {
  imgClub1: string;
  imgClub2: string;
  club1: string;
  club2: string;
  time: string;
  club1_HT1: number;
  club1_HT2: number;
  club2_HT1: number;
  club2_HT2: number;
};

type MatchListProps = {
  List: Match[];
  IsHomePage: boolean;
};

const MatchList: React.FC<MatchListProps> = ({ List, IsHomePage }) => (
  <ul>
    {List.map((L, index) => (
      <li
        className={`${
          IsHomePage
            ? ""
            : "border-b-1 border-solid border-[var(--color-secondary)]"
        }`}
        key={index}
      >
        <div
          className={`inline-grid w-full items-center ${
            IsHomePage ? "grid-cols-[9fr_4fr]" : "grid-cols-[4fr_4fr]"
          }  text-xs h-[72px] py-[15px] px-[20px]`}
        >
          <div className="border-r-[1px] max-lg:border-r-0 border-solid border-[var(--color-secondary)] flex items-center gap-2 h-[42px]">
            <img src="/src/assets/Star.svg" alt="Star" />
            <h2
              className={`text-xs max-lg:hidden w-[4rem] text-[var(--color-text)] flex justify-center ${
                L.time.slice(-1) === "'" ? "text-red-500" : ""
              }`}
            >
              {L.time}
            </h2>

            <div className="w-full space-y-2">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={L.imgClub1} alt={L.club1} />
                  <h1 className="font-medium text-[var(--color-text)]">
                    {L.club1}
                  </h1>
                </div>
                <div className="w-[3rem] max-lg:hidden text-[var(--color-text)] px-4 flex justify-center ">
                  {L.club1_HT1}
                </div>
              </div>

              <div className="flex justify-between ">
                <div className="flex gap-2 items-center">
                  <img src={L.imgClub2} alt={L.club2} />
                  <h1 className="font-medium text-[var(--color-text)]">
                    {L.club2}
                  </h1>
                </div>
                <div className="w-[3rem] max-lg:hidden text-[var(--color-text)] px-4 flex  justify-center">
                  {L.club2_HT1}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex max-lg:w-full">
              <div className="w-[3rem] text-[var(--color-text)] space-y-2 max-lg:flex-col justify-end max-lg:w-full px-4 max-lg:border-r-0 border-r-[1px] h-[48px] border-solid border-[var(--color-secondary)]">
                <p className="flex justify-center">{L.club1_HT2}</p>
                <p className="flex justify-center">{L.club2_HT2}</p>
              </div>
              <h2
                className={`text-xs  max-lg:flex w-[4rem] text-[var(--color-text)] hidden items-center justify-center  ${
                  L.time.slice(-1) === "'" ? "text-red-500" : ""
                }`}
              >
                {L.time}
              </h2>
              <div className="w-[3rem] max-lg:hidden text-[var(--color-text)] space-y-2 px-4">
                <p className="flex justify-center">-</p>
                <p className="flex justify-center">-</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] max-lg:hidden gap-4 items-center">
              <img src="/src/assets/Shirt.svg" alt="Shirt" />
              <img src="/src/assets/TV.svg" alt="TV" />
              <img src="/src/assets/Info.svg" alt="Info" />
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
export default MatchList;
