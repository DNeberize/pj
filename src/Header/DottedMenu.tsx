import React, { useState } from "react";
import { Drawer, Button } from "antd";
import dotsGridIcon from "../assets/dots-grid.svg";

const DottedMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        type="default"
        onClick={() => setVisible(true)}
        className="cursor-pointer hover:opacity-80 !bg-[var(--color-primary)] border-[var(--color-text)]/[10%] 
        flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[36px] w-[36px] !p-0"
        style={{ padding: 0 }}
      >
        <img
          className="w-[20px] h-[20px] flex-shrink-0"
          src={dotsGridIcon}
          alt="Dropdown"
        />
      </Button>

      <Drawer
        title="Dotted Menu"
        placement="right"
        width="100vw"
        onClose={() => setVisible(false)}
        open={visible}
        className="custom-sidebar"
      >
        <div className="fixed right-0 top-0 flex p-2 gap-4"></div>
        <div className="sidebar-content"></div>
      </Drawer>
    </>
  );
};

export default DottedMenu;
