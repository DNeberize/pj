import { Link, Outlet, useParams } from "react-router-dom";

const pages = [
  "Overview",
  "Schedule",
  "Standings",
  "Stats",
  "Transfer",
  "Champions", 
];

export default function LeagueLayout() {
  const { country, id } = useParams();

  return (
    <div>
      <div>
        {pages.map((page) => (
          <Link
            key={page}
            to={`/country/${country}/${id}/${page.toLowerCase()}`}
            style={{ marginRight: 10 }}
          ></Link>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}
