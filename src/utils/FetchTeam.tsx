import axios from "axios";

interface Team {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

export const FetchTeam = async (teamId: number): Promise<Team | null> => {
  try {
    const response = await axios.get<{ response: Team[] }>(
      `https://v3.football.api-sports.io/teams?id=${teamId}`,
      {
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      }
    );

    return response.data.response[0] || null;
  } catch (error) {
    console.error("Error fetching team info:", error);
    return null;
  }
};
