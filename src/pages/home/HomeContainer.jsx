import React from "react";

import HomeHero from "../../components/home/HomeHero";
import Featured from "../../components/home/Featured";
import FAQ from "../../components/home/FAQ";

const Home = () => {
  const trendingLink = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1
  `;

  const highestRatingLink = `https://api.themoviedb.org/3/movie/top_rated?
api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1
  `;

  const nowShowingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  return (
    <div className="flex flex-col gap-6">
      <HomeHero />
      <Featured
        title={"Trending this week"}
        subtext={"You don't want to miss this out."}
        link={trendingLink}
        endpoint={"trending-movies"}
        isNumbering={true}
        isRated={true}
        isDetailed={false}
      />
      <Featured
        title={"All-Time Highest Rated Movie"}
        subtext={"The pinnacle of cinematic artistry."}
        link={highestRatingLink}
        endpoint={"highest-rated-movies"}
        isNumbering={true}
        isRated={true}
        isDetailed={false}
      />
      <Featured
        title={"In theaters"}
        subtext={"Showtimes near you"}
        link={nowShowingLink}
        endpoint={"in-theaters-movies"}
        isNumbering={false}
        isRated={false}
        isDetailed={false}
      />
      <FAQ />
    </div>
  );
};

export default Home;
