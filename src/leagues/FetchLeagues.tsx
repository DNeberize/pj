export async function fetchLeaguesByCountry(countryName: string) {
  if (!countryName) return [];

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/leagues?country=${encodeURIComponent(
        countryName
      )}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "fe4a3e5f07e932632340b6d7e7a0e345",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.response.map((item: any) => ({
      flag: item.league.logo,
      name: item.league.name,
      country: item.country.name,
    }));
  } catch (error) {
    console.error("Error fetching leagues:", error);
    return [];
  }
}
