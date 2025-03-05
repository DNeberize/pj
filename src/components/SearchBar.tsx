import { MenuProps } from "antd";
import { ConfigProvider, Dropdown } from "antd";
import { useState } from "react";
import "../styles/segment.css";
import searchIcon from "@assets/Search.svg";
import closeIcon from "@assets/X.svg";
import noImageIcon from "@assets/NoImage.svg";

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
        <div className="flex items-center cursor-auto hover:none justify-between p-2 rounded">
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
            className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-text)]/[40%] w-full rounded-l-[8px] h-10 p-2 text-xs focus:outline-none"
            type="search"
            placeholder="Search Match, Team or Player"
            value={search}
            onChange={(e) => {
              const newSearch = e.target.value;
              setSearch(newSearch);
              setVisible(!!newSearch);
            }}
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[var(--color-primary)] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src={searchIcon} alt="Search" />
          </button>
        </form>
      ),
      key: "searchBar",
    },
    {
      label: (
        <div className="flex items-center cursor-auto justify-between p-2 rounded">
          <div className="w-full gap-3 justify-between rounded-[12px] flex">
            {["All", "Teams", "Leagues", "Players"].map((item, index) => (
              <button
                key={index}
                className={`rounded-[8px] mobile-menu-p-sizedown py-[8px] text-xs w-fill cursor-pointer font-semibold 
                  px-[1rem] flex items-center justify-center w-full max-w-440-shrink mobile-menu-p-sizedown transition-colors duration-500 ease-in-out
                  ${
                    selectedTab === item
                      ? "bg-[#7F3FFC] text-white"
                      : "text-[var(--color-text)]/70"
                  }`}
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
        <div className="flex items-center p-2 hover:bg-[var(--color-secondary)] rounded">
          Teams
        </div>
      ),
      key: "0",
    },
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => ({
      label: (
        <div className="flex items-center gap-4 p-2 hover:bg-[var(--color-secondary)] rounded">
          <img src={noImageIcon} alt="No Image" />
          <span>
            <h3 className="text-xs">Team Name</h3>
            <p className="[var(--color-text-light)] text-[10px]">Country</p>
          </span>
        </div>
      ),
      key: id.toString(),
    })),
  ];

  return (
    <form className="relative h-10 flex" onSubmit={(e) => e.preventDefault()}>
      <input
        className="border-[var(--color-text)]/[10%] max-w-1024-hidden text-[var(--color-text)]/[40%] w-full border border-solid min-w-[140px] rounded-[8px] h-10 p-2 pr-[50px] text-xs focus:outline-none"
        type="search"
        value={search}
        onChange={(e) => {
          const newSearch = e.target.value;
          setSearch(newSearch);
          setVisible(!!newSearch);
        }}
        placeholder="Search Match, Team or Player"
      />
      <ConfigProvider
        theme={{
          components: {
            Dropdown: {
              colorBgElevated: "var(--color-primary)",
              colorText: "var(--color-text)",
              controlItemBgHover: "var(--color-primary)",
              colorPrimaryHover: "var(--color-text)",
              controlItemBgActive: "var(--color-secondary)",
              colorBgTextActive: "var(--color-text)",
            },
          },
        }}
      >
        <Dropdown
          menu={{ items }}
          overlayClassName="search-events"
          open={visible}
          className="h-full"
        >
          <button
            type="submit"
            onClick={() => window.innerWidth < 1024 && setVisible(true)}
            className="cursor-pointer hover:opacity-80 max-lg:h-[36px] absolute right-0 top-0 border-[var(--color-text)]/[10%] bg-[var(--color-primary)] border border-solid rounded-[8px] h-10 w-[48px] flex items-center justify-center"
          >
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </Dropdown>
      </ConfigProvider>
    </form>
  );
}
