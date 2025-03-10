export default function SideLined(){
   return (<div className="w-full flex flex-col gap-3 rounded-[8px] bg-[var(--color-bg)] py-5">
    <h3 className="text-sm px-5 font-bold flex text-[var(--color-text)]">
    Goal Distribution
    </h3>
    <div>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-6 px-5 py-2 border-b-1 border-solid border-[var(--color-secondary)] justify-between">
            <h2 className="text-xs text-[var(--color-text-light)] min-w-53  truncate overflow-hidden text-ellipsis whitespace-nowrap">PLAYER</h2>
            <h2 className="text-xs flex justify-center text-[var(--color-text-light)]">REASON</h2>
            <h2 className="text-xs flex justify-center text-[var(--color-text-light)]">POSITION</h2>
            <h2 className="text-xs flex justify-center text-[var(--color-text-light)]">SINCE</h2>
        </div>
    </div>
    </div>)
}