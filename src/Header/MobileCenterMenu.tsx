function MobileHeaderMenu() {
  return (
    <div className="grid lg:hidden grid-cols-6 h-12 w-full gap-[1rem] bg-white">
      <button
        className={`rounded-[8px] w-full cursor-pointer font-semibold flex-cols  items-center  h-full shrink-0 transition-colors duration-500 ease-in-out `}
      >
        <img
          className="w-full flex justify-center max-h-[20px]"
          src="src\assets\menuStar.svg"
          alt=""
        />
        <h3 className="text-[12px] text-[#23262EB2]">Football</h3>
      </button>
      <button
        className={`rounded-[8px] w-full cursor-pointer font-semibold flex-cols  items-center  h-full shrink-0 transition-colors duration-500 ease-in-out `}
      >
        <img
          className="w-full flex justify-center max-h-[20px]"
          src="src\assets\Ball.svg"
          alt=""
        />
        <h3 className="text-[12px] text-[#23262EB2]">Football</h3>
      </button>
      <button
        className={`rounded-[8px] w-full cursor-pointer font-semibold flex-cols  items-center  h-full shrink-0 transition-colors duration-500 ease-in-out `}
      >
        <img
          className="w-full flex justify-center max-h-[20px]"
          src="src\assets\Basketball.svg"
          alt=""
        />
        <h3 className="text-[12px] text-[#23262EB2]">Football</h3>
      </button>
      <button
        className={`rounded-[8px] w-full cursor-pointer font-semibold flex-cols  items-center  h-full shrink-0 transition-colors duration-500 ease-in-out `}
      >
        <img
          className="w-full flex justify-center max-h-[20px]"
          src="src\assets\Hockey.svg"
          alt=""
        />
        <h3 className="text-[12px] text-[#23262EB2]">Football</h3>
      </button>
      <button
        className={`rounded-[8px] w-full cursor-pointer font-semibold flex-cols  items-center  h-full shrink-0 transition-colors duration-500 ease-in-out `}
      >
        <img
          className="w-full flex justify-center max-h-[20px]"
          src="src\assets\Handball.svg"
          alt=""
        />
        <h3 className="text-[12px] text-[#23262EB2]">Football</h3>
      </button>
      <button
        className={`rounded-[8px] w-full cursor-pointer font-semibold flex-cols  items-center  h-full shrink-0 transition-colors duration-500 ease-in-out `}
      >
        <img
          className="w-full flex justify-center max-h-[20px]"
          src="src\assets\Rugby.svg"
          alt=""
        />
        <h3 className="text-[12px] text-[#23262EB2]">Football</h3>
      </button>
    </div>
  );
}

export default MobileHeaderMenu;
