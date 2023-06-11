import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
import jobsData from "./jobsData.json";
import jobDetailsData from "./jobDetailsData.json";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // let data = null;
      // switch (endpoint) {
      //   case "search":
      //     data = jobsData.data;
      //     break;
      //   case "job-details":
      //     data = jobDetailsData.data;
      //     break;

      //   default:
      //     break;
      // }
      // setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
