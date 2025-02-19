import React, { useState } from "react";
import { Drawer, Button } from "antd";
import SettingsBar from "./SettingButton";
import "../custom-sidebar.css";
import DottedMenu from "./DottedMenu";
import LeftSideBar from "../sides/LeftSide";

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
      <Button type="primary" onClick={showDrawer} className="sidebar-toggle  flex items-center justify-center min-h-[40px]">
  <img className="h-[20px] w-[20px]" src="src/assets/dropDown.svg" alt="" />
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
          <LeftSideBar IsPC={false} />
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
