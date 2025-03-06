import ThemeToggleSelect from "../utils/DarkModeToggle";

type ModalProps = {
  ModalHandler?: () => void;
};

export const SettingsModalContent: React.FC<ModalProps> = ({
  ModalHandler,
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between p-2 rounded">
      <h2 className="text-lg text-[var(--color-text)] font-semibold">
        Settings
      </h2>
      <button
        className="cursor-pointer hover:opacity-80"
        onClick={ModalHandler}
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

export const DottedGridModalContent: React.FC<ModalProps> = ({
  ModalHandler,
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between p-2 rounded">
      <h2 className="text-lg text-[var(--color-text)] font-semibold">
        Grid Menu
      </h2>
      <button
        className="cursor-pointer hover:opacity-80"
        onClick={ModalHandler}
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
