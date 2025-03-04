import { Flex, Progress } from "antd";
import MatchList from "../../../features/feed/MatchListing";
import Matches from "../../../data/Matches.json";

interface StagesProps {
  selectedTab: number;
  handleTabChange: (label: number) => void;
}

const Stages = ({ selectedTab, handleTabChange }: StagesProps) => {
  return (
    <>
      <div className="bg-[var(--color-bg)] rounded-[12px] w-full p-4">
        <h2 className="text-[var(--color-text)] mb-3 font-bold text-sm">
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
        <p className="flex text-xs font-semibold py-3 [var(--color-text-light)]">
          2024/2025
        </p>
      </div>
      <div className="bg-[var(--color-bg)] rounded-[12px] flex flex-col gap-y-6 px-5 w-full pt-4">
        <h2 className="text-[var(--color-text)] -mb-2 font-bold text-sm">
          Tournament status
        </h2>
        <div className="flex flex-wrap gap-2 max-w-[1000px]">
          {Array.from({ length: 38 }, (_, index) => index + 1).map((item) => (
            <button
              key={item}
              className={`mobile-menu-p-sizedown min-w-[50px] py-[12px] text-xs rounded-[8px] cursor-pointer font-semibold 
                px-[1rem] flex items-center border-1 border-solid border-[var(--color-secondary)] justify-center max-w-440-shrink mobile-menu-p-sizedown transition-colors duration-500 ease-in-out
                ${
                  selectedTab === item
                    ? "bg-[#7F3FFC] text-white"
                    : "bg-[var(--color-primary)] [var(--color-text-light)]"
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

export default Stages;
