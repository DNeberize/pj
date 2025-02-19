import { useState } from "react";

function ListOfLists() {
  const sections = [
    {
      title: "Football",
      items: [
        "Transfer News",
        "Live",
        "Premier League",
        "Seria A",
        "Ligue 1",
        "Bundesliga",
      ],
    },
    {
      title: "Football",
      items: [
        "Transfer News",
        "Live",
        "Premier League",
        "Seria A",
        "Ligue 1",
        "Bundesliga",
      ],
    },
    {
      title: "Football",
      items: [
        "Transfer News",
        "Live",
        "Premier League",
        "Seria A",
        "Ligue 1",
        "Bundesliga",
      ],
    },
    {
      title: "Football",
      items: [
        "Transfer News",
        "Live",
        "Premier League",
        "Seria A",
        "Ligue 1",
        "Basketball Olympic Games 2024",
      ],
    },
  ];

  const [openSections, setOpenSections] = useState(
    Array(sections.length).fill(false)
  );

  const toggleSection = (index: any) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="h-[240px] gap-[25px] grid grid-cols-[1fr_1fr_1fr_1fr] max-lg:grid-cols-1 max-lg:h-auto w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="max-lg:border-b border-solid border-[#23262E1A]"
        >
          <h2
            className="text-[#23262E] mb-1 flex justify-between font-semibold text-[14px] uppercase cursor-pointer"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <img
              className={`lg:hidden transform transition-transform ${
                openSections[index] ? "rotate-180" : ""
              }`}
              src="src/assets/VectorV2.svg"
              alt=""
            />
          </h2>
          <ul
            className={`list-none flex flex-col gap-y-[10px] max-lg:${
              openSections[index] ? "block" : "hidden"
            }`}
          >
            {section.items.map((item, i) => (
              <li key={i} className="text-[12px] text-[#23262E]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ListOfLists;
