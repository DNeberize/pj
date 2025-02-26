import { useParams } from "react-router-dom";
import Overview from "./Pages/Overview";
import Standings from "./Pages/Standings";
import Transfer from "./Pages/Transfer";
import Stats from "./Pages/Stats";
import Champions from "./Pages/Champions";
import Schedule from "./Pages/Schedule";

function LeaguePageRouter() {
  const { page } = useParams();
  const activePage = page ? page.toLowerCase() : "overview";

  console.log("LeaguePageRouter - Current page:", activePage);

  switch (activePage) {
    case "overview":
      return <Overview />;
    case "standings":
      return <Standings />;
    case "transfer":
      return <Transfer />;
    case "stats":
      return <Stats />;
    case "champions":
      return <Champions />;
    case "schedule":
      return <Schedule />;
    default:
      return <Overview />;
  }
}

export default LeaguePageRouter;
