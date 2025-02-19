import React from "react";
import { Segmented } from "antd";
import img from "../assets/Live.svg";
import MobileFeedMenu from "./MobileFeedMenu";
import "./segment.css";

type FeedMenuProps = {
  selectedTab: string;
  handleTabChange: (value: string) => void;
};

const FeedMenu: React.FC<FeedMenuProps> = ({
  selectedTab,
  handleTabChange,
}) => {
  return (
    <>
      <div className="jemala grid grid-cols-[12fr_4fr] max-lg:flex gap-8 p-[20px] mb-4">
        <div className="max-lg:hidden">
          <Segmented
            block={true}
            value={selectedTab}
            onChange={(value) => handleTabChange(value as string)}
            options={[
              { label: "All Matches", value: "All Matches" },
              {
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src={img}
                      alt="Live"
                      style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                    Live (12)
                  </div>
                ),
                value: "Live (12)",
              },
              { label: "Finished", value: "Finished" },
              { label: "Scheduled", value: "Scheduled" },
            ]}
            style={{
              borderRadius: "12px",
              height: "100%",
              fontSize: "12px",
              padding: "4px",
            }}
          />
        </div>
        <div className="h-[45px] max-lg:hidden rounded-[8px] min-w-[130px] bg-[#F7F8FA] flex justify-between p-[12px] items-center">
          <img
            className="rotate-90 size-[10px]"
            src="src/assets/Vector.svg"
            alt=""
          />
          <img src="src/assets/calendar.svg" alt="" />
          <p className="text-[11px] text-[#23262E] font-semibold">01.08 THU</p>
          <img
            className="-rotate-90 size-[11px]"
            src="src/assets/Vector.svg"
            alt=""
          />
        </div>
        <MobileFeedMenu
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        />
      </div>
    </>
  );
};

export default FeedMenu;
