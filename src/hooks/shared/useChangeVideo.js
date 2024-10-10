import React, { useEffect, useState } from "react";

const useChangeVideo = (details, isAppendLoading) => {
  const [video, setVideo] = useState();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    if (isAppendLoading) return;

    const {
      videos: { results: trailerResults },
    } = details;

    const trailerKey =
      trailerResults.find(
        (trailer) => trailer.name.toUpperCase() === "OFFICIAL TRAILER",
      )?.key ||
      trailerResults.find((trailer) =>
        trailer.name.toUpperCase().includes("TRAILER"),
      )?.key;

    setVideo(trailerKey);
    setVideoList(trailerResults);
  }, [isAppendLoading]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [video]);

  return { video, videoList, setVideo };
};

export default useChangeVideo;
