import React, { useState } from "react";
import { Drawer, Button } from "antd";
import SettingsBar from "./SettingButton";
import "../styles/custom-sidebar.css";
import DottedMenu from "./DottedMenu";
import LeftSideBar from "../layouts/LeftSide";

const Sidebar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="lg:hidden flex  h-full ">
      <Button
        type="primary"
        onClick={showDrawer}
        className="sidebar-toggle min-w-10 flex items-center justify-center min-h-[40px]"
      >
        <img
          className="h-[20px] min-w-4.5 w-[20px]"
          src="/src/assets/dropDown.svg"
          alt=""
        />
      </Button>

      <Drawer
        title="Menu"
        placement="left"
        width="100vw"
        onClose={closeDrawer}
        open={visible}
        className="custom-sidebar"
      >
        <div className="fixed right-0 top-0 flex p-2 gap-4">
          <SettingsBar />
          <DottedMenu />
        </div>
        <div className="sidebar-content">
          <LeftSideBar IsDesktop={false} />
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
