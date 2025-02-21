import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useState } from "react";
import "../../Feed/segment.css";
import searchIcon from "../../assets/Search.svg";
import closeIcon from "../../assets/X.svg";
import noImageIcon from "../../assets/NoImage.svg";

export default function SearchBar() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center cursor-auto justify-between p-2 rounded">
          <div className="flex gap-2">
            <img src={searchIcon} alt="Search Icon" />
            <h2 className="text-lg text-black font-semibold">Search</h2>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="border-0 cursor-pointer"
          >
            <img src={closeIcon} alt="Close Icon" />
          </button>
        </div>
      ),
      key: "header",
    },
    {
      label: (
        <form className="hidden max-lg:flex">
          <input
            className="bg-[#F7F8FA] text-[#23262E]/[40%] w-full rounded-l-[8px] h-10 p-2 text-[12px] focus:outline-none"
            type="search"
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[#F7F8FA] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src="/src/assets/Search.svg" alt="Search" />
          </button>
        </form>
      ),
      key: "searchBar",
    },
    {
      label: (
        <div className="flex items-center  cursor-auto justify-between p-2 rounded">
          <div className=" w-full gap-3 justify-between rounded-[12px] flex">
            {["All", "Teams", "Leagues", "Players"].map((item, index) => (
              <button
                key={index}
                className={`rounded-[8px] mobile-menu-p-sizedown py-[8px] text-[12px] w-fill cursor-pointer font-semibold 
                  px-[1rem] flex items-center justify-center w-full max-w-440-shrink mobile-menu-p-sizedown transition-colors duration-500 ease-in-out
                  ${
                    selectedTab === item
                      ? "bg-[#7F3FFC] text-white"
                      : "text-[#23262E]/70 "
                  }
                `}
                onClick={() => handleTabChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ),
      key: "menu",
    },
    { type: "divider" },
    {
      label: (
        <div className="flex items-center p-2 hover:bg-gray-100 rounded">
          Teams
        </div>
      ),
      key: "0",
    },
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => ({
      label: (
        <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded">
          <img src={noImageIcon} alt="No Image" />
          <span>
            <h3 className="text-[12px]">Team Name</h3>
            <p className="text-[#23262EB2] text-[10px]">Country</p>
          </span>
        </div>
      ),
      key: id.toString(),
    })),
  ];

  return (
    <form className="relative h-10 flex " onSubmit={(e) => e.preventDefault()}>
      <input
        className="border-[#23262E]/[10%] max-w-1024-hidden text-[#23262E]/[40%] w-full border border-solid min-w-[140px] rounded-[8px] h-10 p-2 pr-[50px] text-[12px] focus:outline-none"
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisible(!!e.target.value);
        }}
        placeholder="Search Match, Team or Player"
      />
      <Dropdown
        menu={{ items }}
        overlayClassName="search-events"
        open={visible}
        className="h-full"
      >
        <button
          type="submit"
          onClick={() =>
            window.innerWidth < 1024 ? setVisible(true) : visible
          }
          className="cursor-pointer hover:opacity-80 max-lg:h-[36px] absolute right-0 top-0 border-[#23262E]/[10%] bg-[#F7F8FA] border border-solid rounded-[8px] h-10 w-[48px] flex items-center justify-center"
        >
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </Dropdown>
    </form>
  );
}
