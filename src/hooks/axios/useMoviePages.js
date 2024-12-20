import axios from "axios";
import { useState } from "react";

const useMoviePages = () => {
  const [allMovieList, setAllMovieList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleEndpoint = async (endpoint, limit) => {
    try {
      const allMovies = [];

      for (let pageCount = 1; pageCount <= limit; pageCount++) {
        const res = await axios.get(
          // `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${import.meta.env.VITE_API_KEY}&page=${pageCount}`,
          `${endpoint}&page=${pageCount}`,
        );

        const movieDetails = res.data.results.map((movie) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,certifications,recommendations,release_dates`,
          ),
        );

        const results = await Promise.all(movieDetails);

        allMovies.push(...results);
      }

      setAllMovieList(allMovies);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, allMovieList, handleEndpoint };
};

export default useMoviePages;
