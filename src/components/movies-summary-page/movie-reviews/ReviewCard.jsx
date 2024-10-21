import React from "react";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconUser from "@tabler/icons-react/dist/esm/icons/IconUser.mjs";

import formatDate from "../../../helpers/format/formatDate";
import formatReview from "../../../helpers/format/formatReview";

const ReviewCard = ({ reviewData }) => {
  const {
    content,
    author_details: { username, avatar_path, rating },
    updated_at,
  } = reviewData;

  return (
    <div className="flex flex-col gap-4 bg-[var(--bg-neutral)] p-4 shadow shadow-gray-300">
      <div className="flex items-center justify-between">
        {/* <div className="bg-[var(--brand-color-500)] px-2 py-1">
      <p>Featured Review</p>
    </div> */}
        {username && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {avatar_path ? (
                <div
                  className="h-8 w-8 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(http://image.tmdb.org/t/p/w500${avatar_path})`,
                  }}
                ></div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-neutral)] bg-cover bg-center">
                  <IconUser className="h-5 w-5" />
                </div>
              )}

              <p className="font-medium">@{username}</p>
            </div>
          </div>
        )}

        {rating && (
          <div className="flex items-center gap-1">
            <IconStarFilled className="h-5 w-5 text-yellow-500" />
            <p className="text-sm font-light">
              <span className="text-2xl font-medium">{rating}</span>/10
            </p>
          </div>
        )}
      </div>

      {content && (
        <>
          <div className="flex flex-col gap-6">
            {/* <p className="text-xl font-bold">
        Should we call for #BestMovie?
      </p> */}
            {formatReview(content).map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        </>
      )}
      <p className="text-sm font-light">{formatDate(updated_at)}</p>
    </div>
  );
};

export default ReviewCard;
