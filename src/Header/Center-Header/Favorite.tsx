export default function Favorite(){
    return(<div
        className="  border-[#23262E]/[10%] flex w-[160px] border-solid border-[1px] rounded-[8px] p-0 h-10 place-items-center justify-between gap-2 pr-2 pl-2">
        <img src="src/assets/Star.svg" alt="Star icon" />
        Favorite
        <div className="flex justify-center content-center bg-[#23262E]/[10%] rounded-[100px] h-[24px] w-[34px] text-[16px]">12</div>
       
      </div>)
}