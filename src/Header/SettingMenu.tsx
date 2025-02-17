function MenuButtons() {
  return (
    <>
      <div className="flex justify-between gap-4 h-[40px] ">
        <button className="cursor-pointer hover:opacity-80 max-w-1024-hidden bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid  w-[40px]">
          <img src="src/assets/Settings.svg" alt="Ball icon" />
        </button>
        <button className="cursor-pointer hover:opacity-80 max-w-1024-hidden bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid w-[40px]">
          <img src="src/assets/dots-grid.svg" alt="" />
        </button>
        <button className="cursor-pointer hover:opacity-80 text-white  bg-[#7F3FFC] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid max-lg:w-[75px] max-lg:h-[36px] max-w-[5.5rem] min-w-[5rem]  ">
          Sign in
        </button>
      </div>
    </>
  );
}
export default MenuButtons;
