import { ConfigProvider, Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/segment.css";
import { SettingsModalContent } from "../data/ModalContent";
import { DottedGridModalContent } from "../data/ModalContent";
import { SignInModal } from "../data/ModalContent";

const SETTINGS_MODAL = "settings";
const DOTTEDGRID_MODAL = "dottedgrid";
const SIGN_IN_MODAL = "signin";

const MenuButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const isSettingsModalOpen = params.get("modal") === SETTINGS_MODAL;
  const isDottedGridModalOpen = params.get("modal") === DOTTEDGRID_MODAL;
  const isSignInModalOpen = params.get("modal") === SIGN_IN_MODAL;

  const ModalHandler = (modalName?: string) => {
    const params = new URLSearchParams(location.search);
    if (modalName) {
      params.set("modal", modalName);
    } else {
      params.delete("modal");
    }
    navigate(`${location.pathname}?${params.toString()}`);
  };

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
          onCancel={() => ModalHandler()}
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
          <SettingsModalContent ModalHandler={ModalHandler} />
        </Modal>

        <Modal
          open={isDottedGridModalOpen}
          onCancel={() => ModalHandler()}
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
          <DottedGridModalContent ModalHandler={ModalHandler} />
        </Modal>

        <Modal
          open={isSignInModalOpen}
          onCancel={() => ModalHandler()}
          footer={null}
          width={600}
          styles={{
            content: {
              height: "",
              padding: "8px",
            },
            body: {
              padding: 0,
            },
          }}
          centered
          closable={false}
          className="max-lg:hidden"
        >
          <SignInModal ModalHandler={ModalHandler} />
        </Modal>
        <button
          className="cursor-pointer hover:opacity-80 max-lg:hidden bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]"
          onClick={() => ModalHandler(SETTINGS_MODAL)}
        >
          <img
            src="/src/assets/Settings.svg"
            alt="Settings Icon"
            className="h-[1.5rem]"
          />
        </button>
        <button
          className="cursor-pointer max-lg:hidden hover:opacity-80 bg-[var(--color-primary)] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border w-[40px]"
          onClick={() => ModalHandler(DOTTEDGRID_MODAL)}
        >
          <img src="/src/assets/dots-grid.svg" alt="Menu Icon" />
        </button>
      </ConfigProvider>

      <button
        onClick={() => ModalHandler(SIGN_IN_MODAL)}
        className="cursor-pointer hover:opacity-80 text-white bg-[#7F3FFC] border-[var(--color-text)]/[10%] flex items-center justify-center rounded-[8px] border max-lg:w-[75px] max-lg:h-[36px] max-w-[5.5rem] min-w-[5rem]"
      >
        Sign in
      </button>
    </div>
  );
};

export default MenuButtons;
