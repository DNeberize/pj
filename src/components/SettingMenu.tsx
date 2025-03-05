import { ConfigProvider, Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/segment.css";
import ThemeToggleSelect from "../utils/DarkModeToggle";

const SETTINGS_MODAL = "settings";
const DOTTEDGRID_MODAL = "dottedgrid";

const MenuButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const isSettingsModalOpen = params.get("modal") === SETTINGS_MODAL;
  const isDottedGridModalOpen = params.get("modal") === DOTTEDGRID_MODAL;

  const handleOpenModal = (modalName) => {
    const params = new URLSearchParams(location.search);
    params.set("modal", modalName);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleCloseModal = () => {
    const params = new URLSearchParams(location.search);
    params.delete("modal");
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const settingsModalContent = (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between p-2 rounded">
        <h2 className="text-lg text-[var(--color-text)] font-semibold">
          Settings
        </h2>
        <button
          className="cursor-pointer hover:opacity-80"
          onClick={handleCloseModal}
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

  const dottedGridModalContent = (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between p-2 rounded">
        <h2 className="text-lg text-[var(--color-text)] font-semibold">
          Grid Menu
        </h2>
        <button
          className="cursor-pointer hover:opacity-80"
          onClick={handleCloseModal}
        >
          <img src="/src/assets/X.svg" alt="Close" className="h-4 w-4" />
        </button>
      </div>
      <div className="border-t border-[var(--color-secondary)]" />
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
          <span className="text-[var(--color-text)]">Timezone</span>
          <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
            <option value="utc">UTC</option>
            <option value="est">EST</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
          <span className="text-[var(--color-text)]">Edit</span>
          <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
            <option value="1.50">1.50</option>
            <option value="2.00">2.00</option>
          </select>
        </div>
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
          onCancel={handleCloseModal}
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
          {settingsModalContent}
        </Modal>

        {/* Dotted Grid Modal */}
        <Modal
          open={isDottedGridModalOpen}
          onCancel={handleCloseModal}
          footer={null}
          width={400}
          styles={{
            content: {
              height: "200px",
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
          {dottedGridModalContent}
        </Modal>

        {/* Buttons */}
        <button
          className="cursor-pointer hover:opacity-80 bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]"
          onClick={() => handleOpenModal(SETTINGS_MODAL)}
        >
          <img
            src="/src/assets/Settings.svg"
            alt="Settings Icon"
            className="h-[1.5rem]"
          />
        </button>
        <button
          className="cursor-pointer max-lg:hidden hover:opacity-80 bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]"
          onClick={() => handleOpenModal(DOTTEDGRID_MODAL)}
        >
          <img src="/src/assets/dots-grid.svg" alt="Menu Icon" />
        </button>
      </ConfigProvider>

      <button className="cursor-pointer hover:opacity-80 text-white bg-[#7F3FFC] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border max-lg:w-[75px] max-lg:h-[36px] max-w-[5.5rem] min-w-[5rem]">
        Sign in
      </button>
    </div>
  );
};

export default MenuButtons;
