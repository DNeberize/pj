import axiosInstance from "./FetchBase";
interface LeagueResponse {
  league: {
    id: any;
    name: string;
    logo: string;
  };
  country: {
    name: string;
    flag: string;
  };
}

export interface League {
  id: any;
  name: string;
  logo: string;
  country: string;
  flag: string;
}

export async function fetchLeaguesByCountry(countryName: string) {
  const response = await axiosInstance.get(
    `/leagues?country=${encodeURIComponent(countryName)}`
  );

  return response.data.response.map((item: LeagueResponse) => ({
    id: item.league.id,
    name: item.league.name,
    logo: item.league.logo,
    country: item.country.name,
    flag: item.country.flag,
  }));
}
