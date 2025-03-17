import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message || "An error occurred";

      if (statusCode === 401) {
        console.error("Unauthorized access - redirecting to login");
      } else if (statusCode === 500) {
        console.error("Server error - try again later");
      } else {
        console.error(`Error ${statusCode}: ${errorMessage}`);
      }
    } else if (error.request) {
      console.error("Network error - check your internet connection");
    } else {
      console.error("Request error:", error.message);
    }
  }
);

export default axiosInstance;
