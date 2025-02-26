export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/countries",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "d22ef0645cbfd825854110faddc2a669",
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
