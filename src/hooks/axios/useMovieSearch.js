import axios from "axios";
import { useEffect, useState } from "react";

const useMovieSearch = (query) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(true);

  useEffect(() => {
    (async () => {
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
          .then((finalResult) => setSearchResults(finalResult))
          .catch((error) => console.error(error));
      } catch (error) {
        console.error(error);
        setSearchLoading(false);
      } finally {
        setSearchLoading(false);
      }
    })();
  }, [query]);
  console.log(searchResults);

  return { searchResults, searchLoading };
};

export default useMovieSearch;
