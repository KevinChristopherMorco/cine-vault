import React from "react";
import { useParams } from "react-router-dom";
import PageCard from "./PageCard";

const RecommendPage = ({ isLoading }) => {
  const { list } = useParams();
  if (isLoading) return;
  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="border-l-4 border-[var(--brand-color-500)] px-2 text-2xl font-bold">
        More to explore
      </p>
      {list !== "highest-rated-movies" && (
        <PageCard
          title={"Top Rated Movies of All Time"}
          subtext={" As determined by TMDB Users"}
          link={"highest-rated-movies"}
        />
      )}

      {list !== "trending-movies" && (
        <PageCard
          title={"Trending Movies This Week"}
          subtext={" As determined by TMDB Users"}
          link={"trending-movies"}
        />
      )}

      {list !== "in-theaters-movies" && (
        <PageCard
          title={"Now Showing"}
          subtext={" As determined by TMDB Users"}
          link={"in-theaters-movies"}
        />
      )}

      <PageCard
        title={"Least Favorite Movies"}
        subtext={" As determined by TMDB Users"}
      />
    </div>
  );
};

export default RecommendPage;
