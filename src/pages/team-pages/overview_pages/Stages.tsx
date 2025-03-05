import MatchList from "../../../features/feed/MatchListing";
import Matches from "../../../data/Matches.json";

const Stages = () => {
  return (
    <div className="flex-col flex gap-5">
      <div className="bg-[var(--color-bg)] rounded-[12px] flex flex-col px-5 w-full pt-5">
        <h2 className="text-[var(--color-text)] not-only:font-bold text-sm">
          Scheduled
        </h2>
        <MatchList IsHomePage={false} List={Matches} />
      </div>
      <div className="bg-[var(--color-bg)] rounded-[12px] flex flex-col  px-5 w-full pt-5">
        <h2 className="text-[var(--color-text)] font-bold text-sm">Finished</h2>
        <MatchList IsHomePage={false} List={Matches} />
      </div>
    </div>
  );
};

export default Stages;
