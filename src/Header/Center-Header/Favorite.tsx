export default function Favorite() {
  return (
    <div className=" cursor-pointer hover:opacity-70  border-[var(--color-text)]/[10%] flex  border-solid border-[1px] rounded-[8px] p-0 h-10 place-items-center justify-between gap-2 pr-2 pl-2">
      <img src="/src/assets/Star.svg" alt="Star icon" />
      <p className="max-w-1024-hidden">Favorite</p>
      <div className="flex justify-center content-center bg-[var(--color-text)]/[10%] rounded-[100px] h-[1.5rem] w-[2rem] text-[1rem]">
        12
      </div>
    </div>
  );
}
