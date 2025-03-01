import city from "@assets/Clubs/ManchesterCity.svg";
export default function Champions() {
  return (
    <div className="grid w-full gap-6 grid-cols-[20fr_7fr] max-lg:grid-cols-[1fr]">
      <div className="rounded-[12px] pt-5 gap-6 flex-col bg-[var(--color-bg)]">
        <h2>Champions By year</h2>
        <div className="grid gap-5 p-10 aspect-[4/3] grid-cols-[1fr_1fr_1fr_1fr]">
          {Array.from({ length: 16 }, (_, index) => (
            <div
              className="flex flex-col border-1 gap-2 justify-center items-center border-solid border-black rounded-[12px]"
              key={index}
            >
              <img className="w-10" src={city} alt="" />
              <h2 className="text-[14px]">Manchester City</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[12px] pt-5 gap-6 flex-col bg-[var(--color-bg)]"></div>
    </div>
  );
}
