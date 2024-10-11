import React from "react";
import formatYear from "../../helpers/format/formatYear";

const VideoTitle = ({ title, release_date }) => {
  return (
    <div className="flex items-center gap-2 px-4 lg:px-0 xl:flex-col xl:items-start">
      <p className="text-lg font-medium md:text-xl">{title}</p>
      <p className="text-sm">({formatYear(release_date)})</p>
    </div>
  );
};

export default VideoTitle;
