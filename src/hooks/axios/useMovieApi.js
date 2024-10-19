import { useEffect, useState } from "react";
import axios from "axios";

import { useFilterContext } from "../shared/FilterProvider";
import usePagination from "../shared/usePagination";

const useMovieApi = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {
    currentPage,
    pageActive,
    offset,
    handlePreviousPage,
    handleNextPage,
    handleChoosePage,
    handleOffset,
  } = usePagination();
  console.log(currentPage);

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
    currentPage,
    offset,
    pageActive,

    handleCommonEndpoint,
    handleSpecificEndpoint,
    handleDiscoverEndpoint,
    handleSearchQueryEndpoint,

    handleNextPage,
    handlePreviousPage,
    handleChoosePage,
    handleOffset,
  };
};

export default useMovieApi;
