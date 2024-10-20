import React from "react";

import HomeHero from "../../components/home-page/HomeHero";
import Featured from "../../components/home-page/Featured";
import FAQ from "../../components/home-page/FAQ";
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
        cardType={"poster"}
        isNumbering={true}
        isRated={true}
      />
      <Featured
        title={"All-Time Highest Rated Movie"}
        subtext={"The pinnacle of cinematic artistry."}
        link={highestRatingLink}
        endpoint={"highest-rated-movies"}
        cardType={"poster"}
        isNumbering={true}
        isRated={true}
      />
      <Featured
        title={"In theaters"}
        subtext={"Showtimes near you"}
        link={nowShowingLink}
        endpoint={"in-theaters-movies"}
        cardType={"poster"}
        isNumbering={false}
        isRated={false}
      />
      <FAQ />
    </div>
  );
};

export default Home;
