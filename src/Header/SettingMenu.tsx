import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useState } from "react";
import "../Feed/segment.css";

const MenuButtons = () => {
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center justify-between p-2   rounded">
          <h2 className="text-lg text-black font-semibold">Settings</h2>
          <button
            className="cursor-pointer hover:opacity-80"
            onClick={() => setVisible(false)}
          >
            <img src="src/assets/X.svg" alt="Close" className="h-4 w-4" />
          </button>
        </div>
      ),
      key: "header",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Language</span>
          <select className="border rounded p-1 text-sm">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
      ),
      key: "0",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Timezone</span>
          <select className="border rounded p-1 text-sm">
            <option value="utc">UTC</option>
            <option value="est">EST</option>
          </select>
        </div>
      ),
      key: "1",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Theme</span>
          <select className="border rounded p-1 text-sm">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      ),
      key: "2",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Edit</span>
          <select className="border rounded p-1 text-sm">
            <option value="1.50">1.50</option>
            <option value="2.00">2.00</option>
          </select>
        </div>
      ),
      key: "3",
    },
  ];

  return (
    <div className="flex  settings-menu justify-between gap-4 h-[40px]">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        overlayStyle={{ width: "400px", height: "320px" }}
        open={visible}
        onOpenChange={setVisible}
        className="max-lg:hidden"
      >
        <button className="cursor-pointer hover:opacity-80 bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]">
          <img
            src="src/assets/Settings.svg"
            alt="Settings Icon"
            className="h-[1.5rem]"
          />
        </button>
      </Dropdown>

      <button className="cursor-pointer max-lg:hidden hover:opacity-80 bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]">
        <img src="src/assets/dots-grid.svg" alt="Menu Icon" />
      </button>

      <button className="cursor-pointer hover:opacity-80 text-white bg-[#7F3FFC] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border max-lg:w-[75px] max-lg:h-[36px] max-w-[5.5rem] min-w-[5rem]">
        Sign in
      </button>
    </div>
  );
};

export default MenuButtons;
