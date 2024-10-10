import React from "react";

import tickets from "../../assets/images/movie-tickets.png";
import screening from "../../assets/images/movie.png";
import movie from "../../assets/images/action-movie.png";

const FAQ = () => {
  return (
    <div className="mb-[2rem] flex flex-col gap-6 px-4">
      <p className="text-lg font-bold">Why Flicknest?</p>
      <div className="flex flex-col gap-5 rounded-lg bg-gradient-to-br from-[#1A2145] via-[#1D172D] to-[#1E1425] p-4">
        <div className="text-lg font-medium md:text-xl">
          Film Discovery Awaits!
        </div>
        <p className="md:text-lg">
          Discover Your Next Favorite Film! Explore an expansive database of
          movies, reviews, and insights with FlickNest!
        </p>
        <span className="h-14 w-14 self-end md:h-16 md:w-16">
          <img src={tickets} alt="" />
        </span>
      </div>
      <div className="flex flex-col gap-5 rounded-lg bg-gradient-to-br from-[#1A2145] via-[#1D172D] to-[#1E1425] p-4">
        <div className="text-lg font-medium md:text-xl">Dive into Cinema!</div>
        <p className="md:text-lg">
          Dive into the World of Cinema! Uncover hidden gems and blockbuster
          hits—FlickNest is your ultimate movie companion!
        </p>
        <span className="h-14 w-14 self-end md:h-16 md:w-16">
          <img src={screening} alt="" />
        </span>
      </div>
      <div className="flex flex-col gap-5 rounded-lg bg-gradient-to-br from-[#1A2145] via-[#1D172D] to-[#1E1425] p-4">
        <div className="text-lg font-medium md:text-xl">
          Start Your Movie Journey!
        </div>
        <p className="md:text-lg">
          Your Movie Journey Starts Here! Navigate through genres, ratings, and
          community favorites with FlickNest—where every film lover belongs!
        </p>
        <span className="h-14 w-14 self-end md:h-16 md:w-16">
          <img src={movie} alt="" />
        </span>
      </div>
    </div>
  );
};

export default FAQ;
