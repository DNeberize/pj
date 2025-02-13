import { useState } from "react";

function RightSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-[300px] p-4 pt-3 bg-white rounded-[12px]">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-between mb-2 cursor-pointer"
        >
          <h2 className="text-[14px] font-bold">Download Application</h2>
          <img
            className={`transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            src="src/assets/Vector.svg"
            alt="Toggle Arrow"
          />
        </div>
        {isOpen && (
          <div className="w-[270px] h-[280px] flex-col">
            <div className="rounded-[12px] w-[100%] h-[160px] flex justify-center content-center bg-[#23262E]/10">
              <img
                className="w-[120px]"
                src="src/assets/QR.svg"
                alt="QR Code"
              />
            </div>
            <h2 className="flex justify-center mb-2 mt-2 text-[14px] font-semibold">
              OR
            </h2>
            <div>
              <button className="h-[40px] w-[100%] mb-2 bg-[#23262E]/10 rounded-[12px] flex justify-center font-semibold items-center">
                <img src="src/assets/Google Play.svg" alt="Google Play" />
                <p className="text-[#23262E]/70">Google Play</p>
              </button>
              <button className="h-[40px] w-[100%] bg-[#23262E]/10 rounded-[12px] flex justify-center font-semibold items-center">
                <img src="src/assets/apple.svg" alt="Apple Store" />
                <p className="text-[#23262E]/70">Apple Store</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-[20px] w-[300px] h-[360px] rounded-[12px]">
        <img src="src/assets/Banner.svg" alt="Banner" />
      </div>
    </div>
  );
}

export default RightSideBar;
