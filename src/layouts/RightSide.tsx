import { useState } from "react";
import { useParams } from "react-router-dom";

function RightSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const name = useParams();

  return (
    <div
      className={`pr-[5rem] max-w-1024-hidden ${name.id ? " hidden " : ""} `}
    >
      <div className=" p-4 pt-3 bg-[var(--color-bg)] rounded-[12px]">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-between mb-2 cursor-pointer"
        >
          <h2 className="text-sm font-bold">Download Application</h2>
          <img
            className={`transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            src="/src/assets/Vector.svg"
            alt="Toggle Arrow"
          />
        </div>
        {isOpen && (
          <div className=" h-[280px] flex-col">
            <div className="rounded-[12px] w-[100%] p-5 h-[160px] flex justify-center content-center bg-[var(--color-text)]/10">
              <img src="/src/assets/QR.svg" alt="QR Code" />
            </div>
            <h2 className="flex justify-center mb-2 mt-2 text-sm font-semibold">
              OR
            </h2>
            <div>
              <button className="h-[40px] w-[100%] mb-2 bg-[var(--color-text)]/10 rounded-[12px] flex justify-center font-semibold items-center">
                <img src="/src/assets/Google Play.svg" alt="Google Play" />
                <p className="text-[var(--color-text)]/70">Google Play</p>
              </button>
              <button className="h-[40px] w-[100%] bg-[var(--color-text)]/10 rounded-[12px] flex justify-center font-semibold items-center">
                <img src="/src/assets/apple.svg" alt="Apple Store" />
                <p className="text-[var(--color-text)]/70">Apple Store</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-[20px]  h-[360px] rounded-[12px]">
        <img src="/src/assets/Banner.svg" alt="Banner" />
      </div>
    </div>
  );
}

export default RightSideBar;
