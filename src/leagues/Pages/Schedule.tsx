import MatchList from "../.././Feed/MatchListing";
import Matches from "../.././jsonfiles.json/Matches.json";
import Standings from "../Standing";

export default function Schedule() {
  return (
    <div className=" grid w-full gap-6  grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      <div className="bg-[var(--color-bg)] rounded-[12px] p-5">
        <MatchList IsHomePage={false} List={Matches} />
      </div>
      <Standings isSchedulePage={true} />
    </div>
  );
}
