import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useState } from "react";
import "../../Feed/segment.css";

export default function SearchBar() {
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center justify-between p-2   rounded">
          <h2 className="text-lg text-black font-semibold">Search</h2>
        </div>
      ),
      key: "header",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center  p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-black">Teams</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="src\assets\NoImage.svg" alt="" />
          <span>
            <h3 className="text-[12px]">Team Name</h3>
            <p className=" text-[#23262EB2] text-[10px] ">Country</p>
          </span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="src\assets\NoImage.svg" alt="" />
          <span>
            <h3 className="text-[12px]">Team Name</h3>
            <p className=" text-[#23262EB2] text-[10px] ">Country</p>
          </span>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="src\assets\NoImage.svg" alt="" />
          <span>
            <h3 className="text-[12px]">Team Name</h3>
            <p className=" text-[#23262EB2] text-[10px] ">Country</p>
          </span>
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <form className="relative h-10 flex">
      <input
        className="border-[#23262E]/[10%] max-w-1024-hidden text-[#23262E]/[40%] w-full border-solid border-[1px] min-w-[140px] rounded-[8px] h-10 p-2 pr-[50px] text-[12px]  focus:outline-none"
        type="search"
        onChange={() => setVisible(true)}
        placeholder="Search Match, Team or Player"
      />
      <Dropdown
        menu={{ items }}
        overlayStyle={{
          width: "400px",
          height: "320px",
        }}
        open={visible}
        onOpenChange={setVisible}
        className="max-lg:hidden"
      >
        <button className="cursor-pointer  hover:opacity-80 absolute right-0 top-0 border-[#23262E]/[10%] bg-[#F7F8FA] border-solid border-[1px] rounded-[8px] h-10 max-w-1024-h w-[48px] flex items-center justify-center">
          <img src="src/assets/Search.svg" alt="Settings Icon" className="" />
        </button>
      </Dropdown>
    </form>
  );
}
