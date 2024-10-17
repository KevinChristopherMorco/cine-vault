import { useState } from "react";
import axios from "axios";

const useMovieApi = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleCommonEndpoint = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  const handleSpecificEndpoint = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  return { movieData, isLoading, handleCommonEndpoint, handleSpecificEndpoint };
};

export default useMovieApi;
