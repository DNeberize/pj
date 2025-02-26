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
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    if (!data.response || data.response.length === 0) {
      console.warn("No leagues found for country:", countryName);
      return [];
    }

    console.log("Leagues found:", data.response);

    return data.response.map((item: any) => ({
      logo: item.league.logo,
      name: item.league.name,
      country: item.country.name,
      id: item.league.id,
      flag: item.country.flag,
    }));
  } catch (error) {
    console.error("Error fetching leagues:", error);
    return [];
  }
}
