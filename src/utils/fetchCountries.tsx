import axios from "axios";

export async function fetchCountries() {
  const response = await axios.get(
    "https://v3.football.api-sports.io/countries",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    }
  );

  return response.data.response;
}
