export default function SearchBar() {
    return (
      <form className="relative w-[40%] h-10 flex">
        <input
          className="border-[#23262E]/[10%] text-[#23262E]/[40%] w-full border-solid border-[1px] rounded-[8px] h-10 p-2 pr-[50px] text-[12px]  focus:outline-none"
          type="search"
          placeholder="Search Match, Team or Player"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 border-[#23262E]/[10%] bg-[#F7F8FA] border-solid border-[1px] rounded-[8px] h-10 w-[48px] flex items-center justify-center"
        >
          <img src="src/assets/Search.svg" alt="" className="w-4 h-4" />
        </button>
      </form>
    );
  }
  