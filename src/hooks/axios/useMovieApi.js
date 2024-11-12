import axios from "axios";
import { useState } from "react";

import { useFilterContext } from "../shared/FilterProvider";
import usePagination from "../shared/usePagination";

const useMovieApi = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  const {
    currentPage,
    pageActive,
    handlePreviousPage,
    handleNextPage,
    handleChoosePage,
  } = usePagination();

  const {
    sort,
    order,
    formatGenre,
    filterDate: { startDate, endDate },
    filterRating: { minRating, maxRating },
    filterVotes: { minVotes, maxVotes },
  } = useFilterContext();

  const handleCommonEndpoint = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      setStatus(error.status);

      console.error();
    } finally {
      setLoading(false);
    }
  };

  const handleSpecificEndpoint = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,certifications,recommendations,release_dates,images,reviews`,
      );
      setMovieData(response.data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setStatus(error.status);
      console.error();
    } finally {
      setLoading(false);
    }
  };

  const handleDiscoverEndpoint = async (genreID) => {
    try {
      setLoading(true);

      let link = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreID},${formatGenre}&page=${currentPage}`;

      if (sort && order) {
        link += `&sort_by=${sort}.${order}`;
      }

      if (startDate) {
        link += `&primary_release_date.gte=${startDate}`;
      }
      if (endDate) {
        link += `&primary_release_date.lte=${endDate}`;
      }

      if (minRating) {
        link += `&vote_average.gte=${minRating}`;
      }
      if (maxRating) {
        link += `&vote_average.lte=${maxRating}`;
      }

      if (minVotes) {
        link += `&vote_count.gte=${minVotes}`;
      }
      if (maxVotes) {
        link += `&vote_count.lte=${maxVotes}`;
      }

      const response = await axios.get(link);
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.status);
      setStatus(error.status);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchQueryEndpoint = async (query) => {
    try {
      setLoading(true);
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
    status,
    isLoading,
    currentPage,
    pageActive,

    handleCommonEndpoint,
    handleSpecificEndpoint,
    handleDiscoverEndpoint,
    handleSearchQueryEndpoint,

    handleNextPage,
    handlePreviousPage,
    handleChoosePage,
  };
};

export default useMovieApi;
