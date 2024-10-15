import React from "react";
import getMovieGenre from "../../helpers/movie/getMovieGenre";

const VideoGenre = ({
  usCertification,
  phCertification,
  appendDetails,
  isAppendLoading,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-1 px-4 text-gray-300 lg:px-0">
      {(usCertification || phCertification) && (
        <div className="flex items-center gap-1">
          <img
            src={
              usCertification
                ? `https://em-content.zobj.net/source/facebook/200/flag-for-united-states_1f1fa-1f1f8.png`
                : `https://em-content.zobj.net/source/facebook/65/flag-for-philippines_1f1f5-1f1ed.png`
            }
            className="h-4 w-4"
          />
          <p className="text-[.75rem] md:text-sm">
            {usCertification || phCertification}
          </p>
        </div>
      )}
      |
      {!isAppendLoading &&
        getMovieGenre(appendDetails).length > 1 &&
        getMovieGenre(appendDetails).map((genre, index) => {
          return (
            <p key={index} className="text-[.75rem] md:text-sm">
              {genre.name}
              {index === getMovieGenre(appendDetails).length - 1
                ? ""
                : ","}{" "}
            </p>
          );
        })}
    </div>
  );
};

export default VideoGenre;
