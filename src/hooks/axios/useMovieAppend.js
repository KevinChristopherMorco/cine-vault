import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useMovieAppend = (movieId) => {
  const { id } = useParams();
  const [appendDetails, setAppendDetails] = useState([]);
  const [isAppendLoading, setAppendLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res =
          await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,certifications,recommendations,release_dates,images
`);
        setAppendDetails(res.data);
      } catch (error) {
        console.error(error);
        setAppendLoading(false);
      } finally {
        // setTimeout(() => setAppendLoading(false), 5000);
        setAppendLoading(false);
      }
    })();
  }, [isAppendLoading, id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return { appendDetails, isAppendLoading };
};

export default useMovieAppend;
