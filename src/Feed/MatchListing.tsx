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
};

const MatchList: React.FC<MatchListProps> = ({ List }) => (
  <ul>
    {List.map((L, index) => (
      <li key={index}>
        <div className="inline-grid w-full items-center grid-cols-[9fr_4fr] text-[12px] h-[72px] py-[15px] px-[20px]">
          <div className="border-r-[1px] border-solid border-[#23262E1A] flex items-center gap-2 h-[42px]">
            <img src="src/assets/Star.svg" alt="Star" />
            <h2 className="text-[12px] w-[4rem] flex justify-center">
              {L.time}
            </h2>
            <div className="w-full space-y-2">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={L.imgClub1} alt={L.club1} />
                  <h1 className="font-medium text-[#23262E]">{L.club1}</h1>
                </div>
                <div className="w-[3rem] text-[#23262E] px-4 flex justify-center">
                  {L.club1_HT1}
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={L.imgClub2} alt={L.club2} />
                  <h1 className="font-medium text-[#23262E]">{L.club2}</h1>
                </div>
                <div className="w-[3rem] text-[#23262E] px-4 flex justify-center">
                  {L.club2_HT1}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div className="w-[3rem] text-[#23262E] space-y-2 px-4 border-r-[1px] h-[48px] border-solid border-[#23262E1A]">
                <p className="flex justify-center">{L.club1_HT2}</p>
                <p className="flex justify-center">{L.club2_HT2}</p>
              </div>
              <div className="w-[3rem] text-[#23262E] space-y-2 px-4">
                <p className="flex justify-center">-</p>
                <p className="flex justify-center">-</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 items-center">
              <img src="src/assets/Shirt.svg" alt="Shirt" />
              <img src="src/assets/TV.svg" alt="TV" />
              <img src="src/assets/Info.svg" alt="Info" />
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
export default MatchList;
