import FeedMenu from "./FeedMenu";
import LeagueMatches from "./LeagueMatches";
function CenterFeed() {
  return (
    <div>
      <div className="w-full  ">
        <div className=" rounded-[12px]">
          <img
            className="rounded-[12px]"
            src="src/assets/topBanner.svg"
            alt=""
          />
        </div>

        <FeedMenu>
          <div className="w-[100%]">
            <LeagueMatches />
          </div>
        </FeedMenu>
      </div>
    </div>
  );
}
export default CenterFeed;
