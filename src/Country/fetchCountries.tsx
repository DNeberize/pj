export async function fetchCountries() {
  try {
    const response = await fetch("https://v1.rugby.api-sports.io/countries", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.rugby.api-sports.io",
        "x-rapidapi-key": "fe4a3e5f07e932632340b6d7e7a0e345",
      },
    });

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}
