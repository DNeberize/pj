import { useParams } from "react-router-dom";
import TeamOverview from "../../pages/team-pages/TeamOverview";

import Champions from "../../pages/league-pages/Champions";
import TeamStandings from "../../pages/team-pages/TeamSalary";
import Stages from "../../pages/team-pages/overview_pages/Stages";
import Squad from "../../pages/team-pages/Squad";
import Transfer from "../../pages/league-pages/overview_pages/Transfer";

function TeamPageRouter() {
  const { page } = useParams();
  const activePage = page ? page.toLowerCase() : "overview";

  switch (activePage) {
    case "overview":
      return <TeamOverview />;
    case "salary":
      return <TeamStandings />;
    case "schedule":
      return <Stages />;
    case "squad":
      return <Squad />;
    case "champions":
      return <Champions />;
    case "transfer":
      return <Transfer />;
    default:
      return <TeamOverview />;
  }
}

export default TeamPageRouter;
