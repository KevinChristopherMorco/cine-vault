import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePageData = (handleEndpoint) => {
  const { list } = useParams();
  const [dynamicPageData, setDynamicPageData] = useState({ title: "" });

  useEffect(() => {
    if (list === "trending-movies") {
      handleEndpoint(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US`,
        2,
      );
      setDynamicPageData((prev) => {
        return {
          title: "Trending Movies This Week",
        };
      });
    }
    if (list === "highest-rated-movies") {
      handleEndpoint(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US`,
        10,
      );
      setDynamicPageData((prev) => {
        return {
          title: "All-Time Highest Rated Movie",
        };
      });
    }
    if (list === "in-theaters-movies") {
      handleEndpoint(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US`,
        2,
      );
      setDynamicPageData((prev) => {
        return {
          title: "In Theaters",
        };
      });
    }
  }, [list]);

  return { dynamicPageData };
};

export default usePageData;
