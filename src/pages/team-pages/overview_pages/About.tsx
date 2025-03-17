import { useState, useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (Array.isArray(response.data) && response.data.length > 0) {
      response.data[0].body = response.data[0].body.repeat(4);
    }
    return response;
  },
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
    return Promise.reject(error);
  }
);
//TODO yup formik zod, redux, @assets
async function fetchAbout() {
  try {
    const data = {
      first: "",
      second: "",
    };
    const response = await axiosInstance.get("/comments");
    const midPoint = Math.floor(response.data[0].body.length / 2);
    data.first = response.data[0].body.slice(0, midPoint);
    data.second = response.data[0].body.slice(midPoint);
    return data;
  } catch (error) {
    console.error("Failed to fetch about:", error);
    throw error;
  }
}

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState({ first: "", second: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAbout()
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[var(--color-bg)] p-5 w-full rounded-[12px] grid gap-5 transition-all duration-500">
      <h2 className="text-xs text-[var(--color-text)] font-bold">
        About Manchester City
      </h2>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_0fr]"
        } overflow-hidden`}
      >
        <p className="text-xs text-[var(--color-text-light)]">{data.first}</p>
        <div
          className={`overflow-hidden ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } group`}
        >
          {isExpanded && (
            <p className="text-xs text-[var(--color-text-light)] mt-2">
              {data.second}
            </p>
          )}
        </div>
      </div>
      <h2
        onClick={handleToggle}
        className="text-xs text-[#7F3FFC] font-bold cursor-pointer"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </h2>
    </div>
  );
}
