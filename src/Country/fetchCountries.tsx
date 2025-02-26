export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/countries",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        },
      }
    );

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}
