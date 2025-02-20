import {useState } from "react";

import test from "../../test.json"

function SingleCountry() {
  type Country = {
    code: string;
    flag: string;
    name: string;
  };

  type League = {
    id: number;
    name: string;
    logo: string;
    type: string;
  };

  type CountryLeagueData = {
    country: Country;
    league?: League; 
  }[];


  const [CountryList, setCountries] = useState<CountryLeagueData>(test);
//  useEffect(() => {
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
      

      
    </div>
  );
}

export default SingleCountry;
