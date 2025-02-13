import { ReactNode } from "react";

type FeedProps = {
  children: ReactNode;
};
function FeedMenu({ children }: FeedProps) {
  return (
    <div className="bg-white rounded-[12px] text-[#23262E]/70 mt-[20px] ">
      <div className="flex justify-between p-[20px] mb-4">
        <div>
          <div className="bg-[#23262E]/10 h-[45px] rounded-[12px]  p-1 text-[12px] inline-flex">
            <button className="rounded-[8px] text-[#23262E] bg-white font-semibold px-[20px]">
              All Matches
            </button>
            <button className="rounded-[8px] font-semibold px-[20px] flex justify-center items-center">
              <img src="src/assets/Live.svg" alt="" className="mr-2" />
              Live (12)
            </button>
            <button className="rounded-[8px] font-semibold px-[20px]">
              Finished
            </button>
            <button className="rounded-[8px] font-semibold px-[20px]">
              Scheduled
            </button>
          </div>
        </div>
        <div className="h-[45px] w-[150px] rounded-[8px] bg-[#23262E]/10 flex justify-between px-1 items-center ">
          <img
            className=" rotate-90  size-[11px]"
            src="src\assets\Vector.svg"
            alt=""
          />
          <img src="src\assets\calendar.svg" alt="" />
          <p className="text-[12px] text-[#23262E] font-semibold">01.08 THU</p>
          <img
            className=" -rotate-90 size-[11px]"
            src="src\assets\Vector.svg"
            alt=""
          />
        </div>
      </div>
      {children}
    </div>
  );
}
export default FeedMenu;
