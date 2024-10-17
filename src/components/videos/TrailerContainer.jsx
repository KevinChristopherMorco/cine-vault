import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";

import useChangeVideo from "../../hooks/shared/useChangeVideo";
import VideoPlayer from "./VideoPlayer";
import VideoRecommended from "./VideoRecommended";

const Trailer = () => {
  const { movieID } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  const { video, setVideo, videoList } = useChangeVideo(movieData, isLoading);

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, []);

  return (
    <section className="flex grow flex-col gap-8 pb-[1rem] md:pt-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 xl:grid-rows-[35rem_auto] xl:gap-8">
      <VideoPlayer movieData={movieData} isLoading={isLoading} video={video} />
      <VideoRecommended
        videoList={videoList}
        isLoading={isLoading}
        setVideo={setVideo}
      />
    </section>
  );
};

export default Trailer;
