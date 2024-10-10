import React, { useEffect, useState } from "react";

const useMovieTrailer = (details, isAppendLoading) => {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    if (!isAppendLoading) {
      const {
        videos: { results: trailerResults },
      } = details;

      const findOfficialTrailer =
        trailerResults.find(
          (x) => x.name.toUpperCase() === "OFFICIAL TRAILER",
        ) ||
        trailerResults.find((x) => x.name.toUpperCase().includes("TRAILER"));

      setTrailer(findOfficialTrailer.key);
    }
  }, [isAppendLoading]);

  return { trailer };
};

export default useMovieTrailer;
