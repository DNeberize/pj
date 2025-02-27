import { Link } from "react-router-dom";
type League = {
  logo?: string;
  name: string;
  country?: string;
  id?: number;
  flag: string;
};
type LeagueListProps = {
  List: League[];
  IsPage: Boolean;
};

const CountryListing: React.FC<LeagueListProps> = ({ List, IsPage }) => (
  <ul
    className={`${
      IsPage ? "max-h-auto overflow-auto" : "max-h-[400px] overflow-auto"
    }`}
  >
    {List.map((L, index) => (
      <li
        key={index}
        className={`cursor-pointer hover:opacity-80 h-[44px] ${
          IsPage
            ? "border-b-1 pl-[20px] flex justify-between border-[#23262E1A]"
            : "border-b-0"
        }`}
      >
        <Link
          className={`${IsPage ? "w-full flex justify-between" : "border-b-0"}`}
          to={`/country/${L.name}`}
        >
          <div className={`grid grid-cols-[28px_1fr] h-[44px] items-center`}>
            <div
              className={`${
                IsPage
                  ? ""
                  : "w-7 h-7 overflow-hidden flex justify-center items-center rounded-4xl"
              }`}
            >
              <img
                src={L.flag}
                alt={L.name}
                className={`bg-white w-[28px] ${
                  IsPage ? "rounded-[4px]" : "rounded-[27px] scale-140  "
                }`}
              />
            </div>
            <div className="ml-2">
              <h3 className="text-sm text-[#231F2E] min-w-[115px] font-semibold">
                {L.name}
              </h3>
              {L.country && (
                <p className="text-[#23262E]/70 text-[10px]">{L.country}</p>
              )}
            </div>
          </div>
          {IsPage && (
            <img
              className="w-[10px] -rotate-90 mr-[20px]"
              src="/src/assets/Vector.svg"
              alt=""
            />
          )}
        </Link>
      </li>
    ))}
  </ul>
);

export default CountryListing;
