const getMovieTrailer = (details, isAppendLoading) => {
  if (isAppendLoading) return {};

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

  return { trailerKey };
};

export default getMovieTrailer;
