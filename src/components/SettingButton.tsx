import React, { useState } from "react";
import { Drawer, Button } from "antd";
import settingsIcon from "../assets/Settings.svg";
import ThemeToggleSelect from "../utils/DarkModeToggle";

const SettingsBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        type="default"
        onClick={() => setVisible(true)}
        className="cursor-pointer hover:opacity-80 !bg-[#F7F8FA] border-[#23262E]/[10%] 
        flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[36px] w-[36px] !p-0"
        style={{ padding: 0 }}
      >
        <img
          className="w-[20px] h-[20px] flex-shrink-0"
          src={settingsIcon}
          alt="Dropdown"
        />
      </Button>

      <Drawer
        title="Settings"
        placement="right"
        width="100vw"
        onClose={() => setVisible(false)}
        open={visible}
        className="custom-sidebar"
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span>Language</span>
            <select className="border rounded p-1 text-sm">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span>Theme</span>
            <ThemeToggleSelect />
          </div>
          <div className="flex items-center justify-between">
            <span>Font Size</span>
            <select className="border rounded p-1 text-sm">
              <option value="1.50">1.50</option>
              <option value="2.00">2.00</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span>Edit</span>
            {
              <select className="border rounded p-1 text-sm">
                <option value="edit1">Option 1</option>
                <option value="edit2">Option 2</option>
              </select>
            }
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SettingsBar;
