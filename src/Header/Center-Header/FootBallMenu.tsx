import { useState } from "react";

function FootBallMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-[#23262E]/[10%] transition-transform flex w-[160px] border-solid border-[1px] rounded-[8px] p-0 h-10 place-items-center justify-between gap-2 pr-2"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <button className="bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[40px] w-[48px]">
        <img
          className="h-5 w-auto"
          src="src/assets/Football.svg"
          alt="Ball icon"
        />
      </button>
      Football
      <img
        className={`h-2 w-auto transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        src="src/assets/Vector.svg"
        alt="Dropdown icon"
      />
      {isOpen && (
        <ul className="top-20 absolute w-[10vw]">
          <li className="bg-sky-500">list object 1</li>
          <li className="bg-sky-500">list object 2</li>
          <li className="bg-sky-500">list object 3</li>
        </ul>
      )}
    </div>
  );
}

export default FootBallMenu;
