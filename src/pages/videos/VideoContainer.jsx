import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";
import useChangeVideo from "../../hooks/shared/useChangeVideo";

import VideoPlayer from "../../components/videos/VideoPlayer";
import VideoRecommended from "../../components/videos/VideoRecommended";

const VideoContainer = () => {
  const { movieID } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  const { video, setVideo, videoList } = useChangeVideo(movieData, isLoading);

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, [movieID]);

  return (
    <section className="flex grow flex-col gap-8 pb-[1rem] md:pt-0 lg:flex-row lg:px-8">
      <VideoPlayer movieData={movieData} isLoading={isLoading} video={video} />
      <VideoRecommended
        videoList={videoList}
        isLoading={isLoading}
        setVideo={setVideo}
      />
    </section>
  );
};

export default VideoContainer;
