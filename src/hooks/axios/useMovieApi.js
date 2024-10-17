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

  const handleSpecificEndpoint = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,certifications,recommendations,release_dates,images`,
      );
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
