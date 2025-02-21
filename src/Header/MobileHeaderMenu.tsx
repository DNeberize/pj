import { useState } from "react";

function MobileHeaderMenu() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = [
    { name: "All", icon: "menuStar.svg" },
    { name: "Football", icon: "Ball.svg" },
    { name: "Basketball", icon: "Basketball.svg" },
    { name: "Hockey", icon: "Hockey.svg" },
    { name: "Handball", icon: "Handball.svg" },
    { name: "Rugby", icon: "Rugby.svg" },
  ];

  return (
    <div className="grid lg:hidden grid-cols-6  w-full px-2 gap-4 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={` w-full cursor-pointer font-semibold flex flex-col items-center h-full shrink-0 transition-all duration-300 ease-in-out
            ${
              activeTab === tab.name
                ? "border-b-1 border-black text-black"
                : "border-b-0 text-gray-500"
            }`}
          onClick={() => handleTabClick(tab.name)}
        >
          <img
            className={`w-full flex justify-center max-h-[20px] transition-transform duration-300 ${
              activeTab === tab.name ? "scale-105" : "scale-100"
            }`}
            src={`/src/assets/${tab.icon}`}
            alt={tab.name}
          />
          <h3
            className={`text-[12px] small-menu-p transition-all duration-300 ${
              activeTab === tab.name ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            {tab.name}
          </h3>
        </button>
      ))}
    </div>
  );
}

export default MobileHeaderMenu;
