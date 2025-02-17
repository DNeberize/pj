import FeedMenu from "./FeedMenu";
import LeagueMatches from "./LeagueMatches";
function CenterFeed() {
  return (
    <div>
      <div className="w-full max-w-1024-padding   ">
        <div className="flex justify-center rounded-[12px]">
          <img
            className="rounded-[12px]"
            src="src/assets/topBanner.svg"
            alt=""
          />
        </div>
        <div className="bg-white rounded-[12px] text-[#23262E]/70 mt-[20px]  ">
          <FeedMenu />

          <LeagueMatches />
        </div>
      </div>
    </div>
  );
}
export default CenterFeed;
