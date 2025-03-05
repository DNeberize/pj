import { ConfigProvider, Modal } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/segment.css";
import ThemeToggleSelect from "../utils/DarkModeToggle";

const MODAL_NAME = "settings";
const MenuButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const isSettingsModalOpen = params.get("modal") === MODAL_NAME;

  const handleOpenSettings = () => {
    console.log(location, navigate);
    const params = new URLSearchParams(location.search);
    params.set("modal", MODAL_NAME);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleCloseSettings = () => {
    const params = new URLSearchParams(location.search);
    params.delete("modal");
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const modalContent = (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between p-2 rounded">
        <h2 className="text-lg text-[var(--color-text)] font-semibold">
          Search
        </h2>
        <button
          className="cursor-pointer hover:opacity-80"
          onClick={handleCloseSettings}
        >
          <img src="/src/assets/X.svg" alt="Close" className="h-4 w-4" />
        </button>
      </div>
      <div className="border-t border-[var(--color-secondary)]" />

      <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
        <span className="text-[var(--color-text)]">Language</span>
        <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
        <span className="text-[var(--color-text)]">Timezone</span>
        <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
          <option value="utc">UTC</option>
          <option value="est">EST</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
        <span className="text-[var(--color-text)]">Theme</span>
        <ThemeToggleSelect />
      </div>

      <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
        <span className="text-[var(--color-text)]">Edit</span>
        <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
          <option value="1.50">1.50</option>
          <option value="2.00">2.00</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="flex settings-menu justify-between gap-4 h-[40px] relative">
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "var(--color-primary)",
            colorText: "var(--color-text)",
            controlItemBgHover: "var(--color-primary)",
            colorPrimaryHover: "var(--color-text)",
            controlItemBgActive: "var(--color-secondary)",
            colorBgTextActive: "var(--color-text)",
          },
          components: {
            Modal: {
              contentBg: "var(--color-primary)",
              headerBg: "var(--color-primary)",
              borderRadiusLG: 8,
            },
          },
        }}
      >
        <Modal
          open={isSettingsModalOpen}
          onCancel={handleCloseSettings}
          footer={null}
          width={400}
          styles={{
            content: {
              height: "320px",
              padding: "16px",
            },
            body: {
              padding: 0,
            },
          }}
          centered
          closable={false}
          className="max-lg:hidden"
        >
          {modalContent}
        </Modal>

        <button
          className="cursor-pointer hover:opacity-80 bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]"
          onClick={handleOpenSettings}
        >
          <img
            src="/src/assets/Settings.svg"
            alt="Settings Icon"
            className="h-[1.5rem]"
          />
        </button>
      </ConfigProvider>

      <button className="cursor-pointer max-lg:hidden hover:opacity-80 bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]">
        <img src="/src/assets/dots-grid.svg" alt="Menu Icon" />
      </button>

      <button className="cursor-pointer hover:opacity-80 text-white bg-[#7F3FFC] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border max-lg:w-[75px] max-lg:h-[36px] max-w-[5.5rem] min-w-[5rem]">
        Sign in
      </button>
    </div>
  );
};

export default MenuButtons;
