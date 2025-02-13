import FeedMenu from "./FeedMenu";
function CenterFeed() {
  return (
    <div>
      <div className="w-full ">
        <div className=" rounded-[12px]">
          <img
            className="rounded-[12px]"
            src="src/assets/topBanner.svg"
            alt=""
          />
        </div>

        <FeedMenu>
          <div className="w-[100%] h-[100px]">
            <ul>
              <div>
                <img src="" alt="" />
                <img src="src\assets\Country Flags\Argentina.svg" alt="" />
                <h1></h1>
              </div>
              <li></li>
            </ul>
          </div>
        </FeedMenu>
      </div>
    </div>
  );
}
export default CenterFeed;
