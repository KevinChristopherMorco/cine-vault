import { useState } from "react";
import axios from "axios";

const useMovieApi = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState([]);

  const formatGenre = filterGenre.map((genre) => genre.genreID).join(",");
  console.log(formatGenre);

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

  const handleDiscoverEndpoint = async (genreID) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreID},${formatGenre}&sort_by=${filter}.${order}`,
      );
      setMovieData(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  const handleSearchQueryEndpoint = async (query) => {
    try {
      const queryResults = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${import.meta.env.VITE_API_KEY}`,
      );

      const filterSearch = queryResults.data.results
        .filter((search) => search.release_date)
        .map(async (search) => {
          const res =
            await axios.get(`https://api.themoviedb.org/3/movie/${search.id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,certifications,recommendations,release_dates
        `);
          return res;
        });

      Promise.all(filterSearch)
        .then((finalResult) => setMovieData(finalResult))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    movieData,
    isLoading,
    order,
    filter,
    filterGenre,
    handleCommonEndpoint,
    handleSpecificEndpoint,
    handleDiscoverEndpoint,
    handleSearchQueryEndpoint,
    setFilter,
    setOrder,
    setFilterGenre,
  };
};

export default useMovieApi;
