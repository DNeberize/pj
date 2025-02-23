export async function Standings() {
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/standings?league=39&season=2023`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "fe4a3e5f07e932632340b6d7e7a0e345",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.response; // Return actual data
  } catch (error) {
    console.error("Error fetching standings:", error);
    return []; // Return empty array in case of error
  }
}
