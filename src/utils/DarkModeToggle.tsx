import React, { useState, useEffect } from "react";

function ThemeToggleSelect() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
  };

  return (
    <select
      value={theme}
      onChange={handleThemeChange}
      className="border border-[var(--color-secondary)] rounded p-1 text-sm text-[var(--color-text)] bg-[var(--color-bg)]"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}

export default ThemeToggleSelect;
