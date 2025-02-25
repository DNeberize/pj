export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://v1.basketball.api-sports.io/countries",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1.basketball.api-sports.io",
          "x-rapidapi-key": "0af6c4cae9850dba88765797e79d9413",
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
