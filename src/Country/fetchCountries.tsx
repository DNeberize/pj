export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://v1.basketball.api-sports.io/countries",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1.basketball.api-sports.io",
          "x-rapidapi-key": "e322d3134e96e5ca6f13792f4df66ed5",
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
