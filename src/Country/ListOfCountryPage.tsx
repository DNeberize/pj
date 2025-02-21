import { useEffect, useState } from "react";
import ListCountry from "../sides/Listing"
import Country from '../Country.json'


function ListOfCountryPage() {
    
    type Country = {
        code: string;
        flag: string;
        name: string;
      };
  const [CountryList,setCountries] = useState<Country[]>(Country);
  const [Query, SetQuery] = useState("");

  const FilteredCountry = CountryList.filter((country) =>
    country.name.toLowerCase().includes(Query.toLowerCase())
  );

//   useEffect(() => {
//     fetch("https://v3.football.api-sports.io/countries", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "v3.football.api-sports.io",
//         "x-rapidapi-key": "fe4a3e5f07e932632340b6d7e7a0e345" 
//       }
//     })
//       .then((response) => response.json())
//       .then((data) => setCountries(data.response))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <div className="h-auto w-full rounded-[12px] py-[20px] bg-white">
      <div className="px-[20px]">
        <h2 className="flex font-bold text-[14px] text-[#231F2E] mb-[15px] ">
         Leagues By Countries 
        </h2>
        <form className="flex">
          <input
            className="bg-[#F7F8FA] text-[#23262E]/[40%] w-full rounded-l-[8px] h-10 p-2 text-[12px] focus:outline-none"
            type="search"
            value={Query}
            onChange={(e) => SetQuery(e.target.value)}
            placeholder="Search Match, Team or Player"
          />
          <button
            type="submit"
            className="right-0 top-0 bg-[#F7F8FA] rounded-r-[8px] h-10 w-[3rem] flex items-center justify-center"
          >
            <img src="src/assets/Search.svg" alt="Search" />
          </button>
        </form>
        
      </div>
      <ListCountry IsPage={true} List={FilteredCountry} />
      
    </div>
  );
}

export default ListOfCountryPage;
