import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import LeagLogo from "@assets/Country Flags/premier.svg";
import vector from "@assets/Vector.svg";
import { useState } from "react";
import Overview from "./Overview";

const MenuItems = [
  { label: "Overview", id: "0" },
  { label: "Schedule", id: "1" },
  { label: "Standings", id: "2" },
  { label: "Stats", id: "3" },
  { label: "Transfer", id: "4" },
  { label: "Champions", id: "5" },
];

function League() {
  const [selectedTab, setSelectedTab] = useState<string>("Overview");
  const name = useParams();

  return (
    <div className="px-5 md:px-20 flex flex-col gap-6 py-4 w-full  mx-auto">
      <div className="bg-white w-full flex flex-col justify-between p-5 pb-0 gap-5 rounded-[12px]">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/country">Football</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/country">Country</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/country/${name.name}`}>{name.name}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-purple-500">
            {name.League}
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex items-center gap-4">
          <div className="h-28 w-28 rounded-[12px] p-4 border border-[#23262E1A]">
            <img className="rounded w-full" src={LeagLogo} alt="Flag" />
          </div>
          <div>
            <h2 className="text-[#23262E] mb-3 font-bold text-[14px]">
              {name.League}
            </h2>
            <button className="flex text-[12px] font-semibold px-4 py-2 gap-2 text-[#23262EB2] rounded-[8px] border border-solid border-[#23262E1A]">
              2024/2025 <img src={vector} alt="vector" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[70vw] overflow-x-auto scrollbar-hide">
          <div className="flex  min-w-0">
            {MenuItems.map((item) => (
              <button
                key={item.id}
                className={`whitespace-nowrap py-3 px-4 text-[12px] font-semibold transition-colors duration-500 ease-in-out
                  ${
                    selectedTab === item.label
                      ? "border-b-2 border-[#7F3FFC] text-[#7F3FFC]"
                      : ""
                  }`}
                onClick={() => setSelectedTab(item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Overview />
    </div>
  );
}

export default League;
