import { Link } from "react-router-dom";
type League = {
  flag: string;
  name: string;
  country?: string;
};



type LeagueListProps = {
  List: League[];
  IsPage: Boolean;
};

const LeagueList: React.FC<LeagueListProps> = ({ List, IsPage }) => (
  <ul className={`${IsPage ? "max-h-[800px] overflow-auto" : "max-h-[400px] overflow-auto"}`}>
  {List.map((L, index) => (
    <li
      key={index}
      className={`cursor-pointer hover:opacity-80 h-[44px] ${IsPage ? 'border-b-1 pl-[20px] flex justify-between border-[#23262E1A]' : 'border-b-0'}`}
    >
          <Link className={`${IsPage ? 'w-full flex justify-between' : 'border-b-0'}`} to={`/${L.name}`}>
            <div className="grid grid-cols-[28px_1fr] h-[44px] items-center">
          <img
            src={L.flag}
            alt={L.name}
            className={`bg-white w-[28px] ${IsPage ? 'rounded-[4px]' : 'rounded-[29px]'}`}
          />
          <div className="ml-2">
            <h3 className="text-[14px] text-[#231F2E] min-w-[115px] font-semibold">
              {L.name}
            </h3>
            {L.country && <p className="text-[#23262E]/70 text-[10px]">{L.country}</p>}
          </div>
        </div>
        {IsPage && <img className="w-[10px] -rotate-90 mr-[20px]" src="src/assets/Vector.svg" alt="" />}
      </Link>
    </li>
  ))}
</ul>

);

export default LeagueList;
