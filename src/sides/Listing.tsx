type League = {
  img: string;
  name: string;
  country?: string;
};

type LeagueListProps = {
  List: League[];
};

const LeagueList: React.FC<LeagueListProps> = ({ List }) => (
  <ul>
    {List.map((L, index) => (
      <li
        key={index}
        className="cursor-pointer hover:opacity-80 grid grid-cols-[28px_1fr] h-[44px] items-center"
      >
        <img
          src={L.img}
          alt={L.name}
          className="rounded-[29px] bg-white w-[28px]"
        />
        <div className="ml-2 ">
          <h3 className="text-[14px] text-[#231F2E] font-semibold">{L.name}</h3>
          {L.country && (
            <p className="text-[#23262E]/70 text-[10px]">{L.country}</p>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default LeagueList;
