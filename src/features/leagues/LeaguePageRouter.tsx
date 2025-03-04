import { useParams } from "react-router-dom";
import Overview from "../../pages/league-pages/Overview";
import Standings from "../../pages/league-pages/Standings";
import Transfer from "../../pages/league-pages/overview_pages/Transfer";
import Stats from "../../pages/league-pages/Stats";
import Champions from "../../pages/league-pages/Champions";
import Schedule from "../../pages/league-pages/Schedule";

function LeaguePageRouter() {
  const { page } = useParams();
  const activePage = page ? page.toLowerCase() : "overview";

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
