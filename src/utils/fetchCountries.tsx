import axiosInstance from "./FetchBase";

export async function fetchCountries() {
  const response = await axiosInstance.get("/countries");
  return response.data.response;
}
