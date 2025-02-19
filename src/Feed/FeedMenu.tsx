import React from "react";
import { Segmented } from "antd";
import img from "../assets/Live.svg";
import "./segment.css";

type FeedMenuProps = {
  selectedTab: string;
  handleTabChange: (value: string) => void;
  MenuItems: { label: string; id: string }[];
};

const FeedMenu: React.FC<FeedMenuProps> = ({
  selectedTab,
  handleTabChange,
  MenuItems,
}) => {
  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(currentDate.getDate()).padStart(2, "0")} ${currentDate
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase()}`;

  return (
    <>
      <div className="max-lg:hidden">
        <Segmented
          block={true}
          value={selectedTab}
          onChange={(label) => handleTabChange(label as string)}
          options={MenuItems.map((item) => ({
            label: item.id.includes("1") ? (
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
                {item.label}
              </div>
            ) : (
              item.label
            ),
            value: item.label,
          }))}
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
        <p className="text-[11px] text-[#23262E] font-semibold">
          {formattedDate}
        </p>
        <img
          className="-rotate-90 size-[11px]"
          src="src/assets/Vector.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default FeedMenu;
