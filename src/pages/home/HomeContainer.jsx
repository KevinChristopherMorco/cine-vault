import React from "react";

import HomeHero from "../../components/home/HomeHero";
import Featured from "../../components/home/Featured";
import FAQ from "../../components/home/FAQ";
import getCommonLink from "../../helpers/link/getCommonLink";

const Home = () => {
  const { trendingLink, highestRatingLink, nowShowingLink } = getCommonLink();

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
