function MenuButtons() {
  return (
    <>
      <div className="flex justify-between ">
        <button className="cursor-pointer hover:opacity-80 bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid  w-[40px]">
          <img src="src/assets/Settings.svg" alt="Ball icon" />
        </button>
        <button className="cursor-pointer hover:opacity-80 bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid w-[40px]">
          <img src="src/assets/dots-grid.svg" alt="" />
        </button>
        <button className="cursor-pointer hover:opacity-80 text-white  bg-[#7F3FFC] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[40px] max-w-[5.5rem] min-w-[5rem]  ">
          Sign in
        </button>
      </div>
    </>
  );
}
export default MenuButtons;
