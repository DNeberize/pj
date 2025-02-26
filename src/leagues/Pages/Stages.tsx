import { Flex, Progress } from "antd";
import MatchList from "../../Feed/MatchListing";
import Matches from "../../jsonfiles.json/Matches.json";

interface TournamentSectionProps {
  selectedTab: number;
  handleTabChange: (label: number) => void;
}

const TournamentSection = ({
  selectedTab,
  handleTabChange,
}: TournamentSectionProps) => {
  return (
    <>
      <div className="bg-white rounded-[12px] w-full p-4">
        <h2 className="text-[#23262E] mb-3 font-bold text-sm">
          Tournament status
        </h2>
        <Flex gap="small" vertical>
          <Progress
            className="custom-progress"
            size={{ height: 16 }}
            percent={21}
            showInfo={true}
          />
        </Flex>
        <p className="flex text-xs font-semibold py-3 text-[#23262EB2]">
          2024/2025
        </p>
      </div>
      <div className="bg-white rounded-[12px] flex flex-col gap-y-6 px-5 w-full pt-4">
        <h2 className="text-[#23262E] -mb-2 font-bold text-sm">
          Tournament status
        </h2>
        <div className="flex flex-wrap gap-2 max-w-[1000px]">
          {Array.from({ length: 38 }, (_, index) => index + 1).map((item) => (
            <button
              key={item}
              className={`mobile-menu-p-sizedown min-w-[50px] py-[12px] text-xs rounded-[8px] cursor-pointer font-semibold 
                px-[1rem] flex items-center border-1 border-solid border-[#23262E1A] justify-center max-w-440-shrink mobile-menu-p-sizedown transition-colors duration-500 ease-in-out
                ${
                  selectedTab === item
                    ? "bg-[#7F3FFC] text-white"
                    : "bg-[#F7F8FA] text-[#23262EB2]"
                }`}
              onClick={() => handleTabChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <MatchList IsHomePage={false} List={Matches} />
      </div>
    </>
  );
};

export default TournamentSection;
