import React from "react";
import IconPlayerPlayFilled from "@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

const VideoRecommended = ({ videoList, isAppendLoading, setVideo }) => {
  return (
    <div className="relative flex w-full flex-col gap-4 bg-[var(--bg-neutral)] py-4 lg:col-span-2 lg:h-full lg:justify-center lg:gap-6 lg:bg-transparent lg:px-0">
      <div className="absolute left-2 top-[50%] z-[999] flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-md border-2 border-white p-2">
        <IconChevronLeft className="font-bold" />
      </div>
      <div className="absolute right-2 top-[50%] z-[999] flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-md border-2 border-white p-2">
        <IconChevronRight className="font-bold" />
      </div>

      <p className="mx-4 border-l-4 border-[var(--brand-color-500)] px-4 text-lg font-bold lg:text-2xl">
        Related Videos
      </p>
      {!isAppendLoading && (
        <div className="scrollable-content flex overflow-x-scroll">
          {videoList.map((video) => {
            return (
              <div
                key={video.key}
                className="flex w-[85%] shrink-0 cursor-pointer flex-col gap-2 px-4 md:w-[55%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]"
              >
                <div
                  onClick={() => setVideo(video.key)}
                  className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-20"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    alt="YouTube Thumbnail"
                    className="h-[12rem] w-full rounded-lg"
                  />
                  <div className="absolute bottom-2 left-1 flex h-8 w-8 items-center justify-center rounded-full border-4">
                    <IconPlayerPlayFilled className="h-4 w-4" />
                  </div>
                </div>

                <p className="text-sm font-medium">{video.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VideoRecommended;
