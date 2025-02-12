
function MenuButtons(){
    return(<>
     <div className="flex gap-3 ml-5">
     <button
       className=" bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[40px] w-[40px] ">
        <img  src="src/assets/Settings.svg" alt="Ball icon" />
      </button>
      <button
       className=" bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[40px] w-[40px] ">
        <img  src="src/assets/dots-grid.svg" alt="Ball icon" />
      </button>
      <button
       className=" text-white  bg-[#7F3FFC] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[40px] w-[91px] ">
        Sign in
      </button>
     </div>
      
    </>)

}
export default MenuButtons