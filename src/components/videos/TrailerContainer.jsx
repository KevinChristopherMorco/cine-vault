import React from "react";
import { useParams } from "react-router-dom";

import useMovieAppend from "../../hooks/axios/useMovieAppend";

import useChangeVideo from "../../hooks/shared/useChangeVideo";
import VideoPlayer from "./VideoPlayer";
import VideoRecommended from "./VideoRecommended";

const Trailer = () => {
  const { movieID } = useParams();
  const { appendDetails, isAppendLoading } = useMovieAppend(movieID);

  const { video, setVideo, videoList } = useChangeVideo(
    appendDetails,
    isAppendLoading,
  );

  return (
    <section className="flex grow flex-col gap-8 pb-[1rem] pt-[5rem] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 xl:grid-rows-[35rem_auto] xl:gap-8">
      <VideoPlayer
        isAppendLoading={isAppendLoading}
        appendDetails={appendDetails}
        video={video}
      />

      <VideoRecommended
        videoList={videoList}
        isAppendLoading={isAppendLoading}
        setVideo={setVideo}
      />
    </section>
  );
};

export default Trailer;
