import axios from "axios";

export async function fetchCountries() {
  const response = await axios.get(
    "https://v1.basketball.api-sports.io/countries",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.basketball.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    }
  );

  return response.data.response;
}
