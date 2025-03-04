import type { MenuProps } from "antd";
import { ConfigProvider, Dropdown } from "antd";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/segment.css";
import ThemeToggleSelect from "../utils/DarkModeToggle";

const MenuButtons = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("modal") === "settings") {
      setVisible(true);
    }
  }, [location]);

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center justify-between p-2 rounded">
          <h2 className="text-lg text-[var(--color-text)] font-semibold">
            Search
          </h2>
          <button
            className="cursor-pointer hover:opacity-80"
            onClick={() => handleCloseSettings()}
          >
            <img src="/src/assets/X.svg" alt="Close" className="h-4 w-4" />
          </button>
        </div>
      ),
      key: "header",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[var(--color-text)]">Language</span>
          <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
            <option className="text-[var(--color-text)]" value="english">
              English
            </option>
            <option className="text-[var(--color-text)]" value="spanish">
              Spanish
            </option>
          </select>
        </div>
      ),
      key: "0",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[var(--color-text)]">Timezone</span>
          <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
            <option className="text-[var(--color-text)]" value="utc">
              UTC
            </option>
            <option className="text-[var(--color-text)]" value="est">
              EST
            </option>
          </select>
        </div>
      ),
      key: "1",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[var(--color-text)]">Theme</span>
          <ThemeToggleSelect />
        </div>
      ),
      key: "2",
    },
    { type: "divider" },
    {
      label: (
        <div
          className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[var(--color-text)]">Edit</span>
          <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
            <option className="text-[var(--color-text)]" value="1.50">
              1.50
            </option>
            <option className="text-[var(--color-text)]" value="2.00">
              2.00
            </option>
          </select>
        </div>
      ),
      key: "3",
    },
  ];

  const handleOpenSettings = () => {
    setVisible(true);
    const params = new URLSearchParams(location.search);
    params.set("modal", "settings");
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleCloseSettings = () => {
    setVisible(false);
    const params = new URLSearchParams(location.search);
    params.delete("modal");
    navigate(`${location.pathname}`);
  };

  return (
    <div className="flex settings-menu justify-between gap-4 h-[40px] relative">
      {visible && (
        <div className="fixed w-full h-full inset-0 bg-black/30 backdrop-blur-md z-[998]" />
      )}

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
            Dropdown: {},
          },
        }}
      >
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          getPopupContainer={() => document.body}
          overlayStyle={{
            position: "fixed",
            width: "400px",
            height: "320px",
            left: "calc(50% - 200px)",
            top: "calc(50% - 160px)",
            backgroundColor: "var(--color-primary)",
            zIndex: 1000,
            borderRadius: "8px",
          }}
          open={visible}
          onOpenChange={setVisible}
          className="max-lg:hidden"
        >
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
        </Dropdown>
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
