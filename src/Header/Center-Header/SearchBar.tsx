import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useState } from "react";
import "../../Feed/segment.css";

export default function SearchBar() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center justify-between p-2 rounded">
          <h2 className="text-lg text-black font-semibold">Search</h2>
        </div>
      ),
      key: "header",
    },
    { type: "divider" },
    {
      label: (
        <div className="flex items-center p-2 hover:bg-gray-100 rounded">
          <span className="text-black">Teams</span>
        </div>
      ),
      key: "0",
    },
    ...[1, 2, 3].map((id) => ({
      label: (
        <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded">
          <img src="src/assets/NoImage.svg" alt="" />
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
    <form className="relative h-10 flex" onSubmit={(e) => e.preventDefault()}>
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
        overlayClassName="pointer-events-auto"
        overlayStyle={{ width: "400px", height: "320px" }}
        open={visible}
      
      >
        <button
          type="submit"
          className="cursor-pointer hover:opacity-80 max-lg:h-[36px] absolute right-0 top-0 border-[#23262E]/[10%] bg-[#F7F8FA] border border-solid rounded-[8px] h-10 w-[48px] flex items-center justify-center">
          <img src="src/assets/Search.svg" alt="Search Icon" />
        </button>
      </Dropdown>
    </form>
  );
}
