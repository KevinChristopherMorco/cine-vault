import axios from "axios";
import { useEffect, useState } from "react";

const useMovieData = (link) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(link);
        setResponse(res.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { response, isLoading };
};

export default useMovieData;
